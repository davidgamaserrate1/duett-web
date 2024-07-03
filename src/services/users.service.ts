import { GetUsersListResonse, IUser } from "../interfaces/User";

import { Api } from "./api.service";

function returnHeaderWithToken(token:string){
    return token ?  { 'Authorization': `Bearer ${token}` } : undefined
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
    await Api.delete(`admin/users/delete/${id}`, { headers  })
}


