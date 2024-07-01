import { Api } from "./api.config";
import { IErrorResponse } from "../interfaces/ErrorResponse";
import { IUser } from "../interfaces/user";
import { IUserContext } from "../interfaces/authProvider";

export async function loginRequest(email: string, password: string) {
    try {
      const response = await Api.post("auth/login", { email, password });
      
      return response.data;
      
    } catch (error: any) {
        if (error.response) {
            const errorResponse: IErrorResponse = {
                message: error.response.data,
                status: error.response.status,
            };
            return errorResponse;
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}

export async function signupRequest(user: IUser) {
    const response = await Api.post("auth/register", user);
    console.log('response.data', response.data)  
    return response.data; 
}
  
export function setUserLocaStorage(user:IUserContext){
    localStorage.setItem('user', JSON.stringify(user))
}

export function removeUserLocaStorage(){
    localStorage.removeItem('user')
}

export function getUserLocaStorage(){
    const userLocalStorage = localStorage.getItem('user')

    if(!userLocalStorage){
        return null
    }

    const user = JSON.parse(userLocalStorage)

    return user ?? null
}