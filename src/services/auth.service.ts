import { Api } from "./api.config";
import { IChangePassowrdParams } from "../interfaces/ChangePassword";
import { IErrorResponse } from "../interfaces/ErrorResponse";
import { IUser } from "../interfaces/User";
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

export async function signupRequest(user: Partial<IUser>) {
    try{
        const response = await Api.post("auth/register", user);
      
        return response.data
    }catch (error:any) {
        if (error.response && error.response.data) {
            return(error.response.data)
        }
        return(error)
    }
}

export async function changePasswordRequest({ token, id, old_password, new_password}: IChangePassowrdParams) {
    try {
   
        const response = await Api.post("user/change-password",  
            {id, old_password, new_password}, {
                headers: {
                    'Content-Type': 'application/json', 
                    'Authorization' : `Bearer ${token}`
                }
            });

           
        return response.data; 
    } catch (error:any) {
        if (error.response && error.response.data) {
            return(error.response.data)
        }
        return(error)
       
    }
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