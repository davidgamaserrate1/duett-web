export interface ILogin{
    email:  string,
    password:  string 
}

export interface ILoginResponse{
    id: string,
    name: string,
    profile:string,
    token:string
}