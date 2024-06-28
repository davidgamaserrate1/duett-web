import { NavigateButtonProps } from "./navigate.types"
import { useNavigate } from "react-router-dom"

export function Navigate({ url, children }:NavigateButtonProps){
    const navigate = useNavigate()

    const navigateToUrl = () =>{
        navigate(url)
    }

    return (
        <div onClick={navigateToUrl}> 
            {children}
        </div>
    )
}