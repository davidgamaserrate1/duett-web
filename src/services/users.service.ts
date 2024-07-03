import { Api } from "./api.config";

export interface IUser {
    id: string;
    name: string;
    profile: string;
    cpf: string;
    email: string;
    password: string;
}

export interface GetUsersListResonse {
    totalPages:number, 
    content?: IUser[]
}

function returnHeaderWithToken(token:string){
    if(!token)
        return undefined;
    
    return {
        'Authorization': `Bearer ${token}`
    }
}

export async function GetUsersList(page:number, token:string): Promise<GetUsersListResonse>{
    const headers = returnHeaderWithToken(token)
    
    const response = await Api.get(`admin/users?page=${page}`, { headers })
    const content:IUser[]= response.data.content
    const totalPages:number  = response.data.totalPages
    
    return { 
        totalPages, 
        content 
    }
}

export async function DeleteUserById(id:string, token:string): Promise<void>{
    const headers = returnHeaderWithToken(token)
    
    const response = await Api.delete(`admin/users/delete/${id}`, { headers  })
    console.log(response)
    
    
}


