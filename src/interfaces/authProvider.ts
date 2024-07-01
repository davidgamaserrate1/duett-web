export interface IUserContext {    
    id?: string,
    name?: string,
    profile?: string,
    token?: string,
}

export interface IContext extends IUserContext{
    loading:boolean,
    authenticate: (email:string, password:string)=>Promise<Boolean>,
    logout: () => void;
}

export interface IAuthProvider {
    children: JSX.Element
}