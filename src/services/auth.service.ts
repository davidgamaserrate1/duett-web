import { IErrorResponse } from "../interfaces/ErrorResponse";
import { ILogin } from "../interfaces/LoginRequest";
import { ILoginResponse } from "../interfaces/LoginResponse";
import axios from "axios";

const API_LOGIN = "http://localhost:8080/auth/login"

export async function login({ email, password }: ILogin): Promise<ILoginResponse | IErrorResponse> {
    try {
      const response = await axios.post<ILoginResponse>(API_LOGIN, { email, password });
      
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
  