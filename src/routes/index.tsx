import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ChangePassword } from "../pages/ChangePassword"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp"
import { UsersList } from "../pages/UsersList"

export function RoutesApplication(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}> </Route>
                <Route path='/cadastrar' element={<SignUp/>}> </Route>
                <Route path='/home' element={<Home/>}> </Route>
                <Route path='/alterar-senha' element={<ChangePassword/>}> </Route>
                <Route path='/usuarios' element={<UsersList/>}> </Route>
            </Routes>    
        </BrowserRouter>
    )
}