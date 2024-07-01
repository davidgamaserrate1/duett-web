import { BrowserRouter, Route, Routes } from "react-router-dom"

import { AdminProtectedLayout } from "../components/AdminProtectedLayout"
import { AuthProvider } from "../context/AuthProvider"
import { ChangePassword } from "../pages/ChangePassword"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { ProtectedLayout } from "../components/ProtectedLayout"
import { SignUp } from "../pages/SignUp"
import { UsersList } from "../pages/UsersList"

export function RoutesApplication(){
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login/>}> </Route>
                    <Route path='/cadastrar' element={<SignUp/>}> </Route>

                    <Route path='/home' 
                        element={
                            <ProtectedLayout> 
                                <Home/>
                            </ProtectedLayout>
                        }> 
                    </Route>
                    <Route path='/alterar-senha' 
                        element={
                            <ProtectedLayout> 
                                <ChangePassword/>
                            </ProtectedLayout>
                        }> 
                    </Route>
                    <Route path='/usuarios' 
                        element={
                            <AdminProtectedLayout> 
                                <UsersList/>
                            </AdminProtectedLayout>
                        }> 
                    </Route>
                </Routes>    
            </BrowserRouter>
        </AuthProvider>
    )
}