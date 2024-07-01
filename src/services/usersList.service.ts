import { Api } from "./api.config";

interface IUser {    
    id?: string,
    name?: string,
    profile?: string,
    token?: string,
}

export async function GetUsersList(token?:string): Promise<IUser[]>{
    const headers = {
        'Authorization': `Bearer ${token}`
    }
    const response = await Api.get('admin/users', { headers })

    return response.data
}

