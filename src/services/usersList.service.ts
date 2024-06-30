import axios from "axios";

const API_USERS_LIST ="http://localhost:8080/admin/users"

export async function GetUsersList(token?:string){
    if(!token)
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJsb2dpbi1hdXRoLWFwaSIsIm5hbWUiOiJkYXZpZCIsInByb2ZpbGUiOiJBRE1JTiIsInN1YiI6ImFkbWluIiwiZXhwIjoxNzE5Nzc2ODU1fQ.x0ppausFWir9wSTmr-ayj3yCRVdwhSTPzL4fK2_zulE'

    
    const headers ={
        'Authorization': `Bearer ${token}`
    }
    const response = await axios.get(API_USERS_LIST, {
        headers
    })

    console.log(response.data)
}