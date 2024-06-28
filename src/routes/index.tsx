import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp"

export function RoutesApplication(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}> </Route>
                <Route path='/cadastrar' element={<SignUp/>}> </Route>
                <Route path='/recuperar-senha' element={<SignUp/>}> </Route>
            </Routes>    
        </BrowserRouter>
    )
}