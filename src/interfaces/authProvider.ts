export interface IUser {    
    id?: string,
    name?: string,
    profile?: string,
    token?: string,
}

export interface IContext extends IUser{
    loading:boolean,
    authenticate: (email:string, password:string)=>Promise<void>,
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element
}