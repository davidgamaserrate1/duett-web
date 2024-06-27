import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Login } from "../pages/Login"

export function RoutesApplication(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}> </Route>
            </Routes>    
        </BrowserRouter>
    )
}