export interface IUser {
    id:string,
    name:string,
    cpf:string,
    email:string,
    password:string,
    profile:string,
}

export interface GetUsersListResonse {
    totalPages:number, 
    content?: IUser[]
}