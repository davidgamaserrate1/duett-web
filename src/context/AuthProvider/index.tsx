import { IAuthProvider, IContext, IUser } from "../../interfaces/authProvider";
import { createContext, useEffect, useState } from "react";
import { getUserLocaStorage, loginRequest, removeUserLocaStorage, setUserLocaStorage } from "../../services/auth.service";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) =>{ 
    const [user, setUser]= useState<IUser | null> ()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = getUserLocaStorage();
        if (user) {
            setUser(user);
        }
        setLoading(false);
    }, []);


    async function authenticate(email: string, password: string) {
        const respose = await loginRequest(email, password) ;
        
        const userDataContext = {
            id: respose.id,
            name: respose.name,
            profile: respose.profile,
            token: respose.token,
        }
        
        setUser(userDataContext)
        setUserLocaStorage(userDataContext)
    }

    function logout() {
        setUser(undefined);
        removeUserLocaStorage()
    }

    return(
       <AuthContext.Provider value={{...user ,loading, authenticate, logout}}>
            {children}
       </AuthContext.Provider> 
    )
}