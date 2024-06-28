import './redirectText.styles.css'

import { IRedirectProps } from "./redirectText.types"
import { useNavigate } from "react-router-dom"

export function Redirect({firstText, textRedirect, urlRedirect}: IRedirectProps){
    const navigate = useNavigate()
   
    const redirectToUrl = () => {
        navigate(`/${urlRedirect}`)
    }
    
    return(
        <div className='link_redirect'>
            <span>{ firstText && firstText} 
                <span onClick={redirectToUrl}>{textRedirect}</span>
            </span>
        </div>
    )
}