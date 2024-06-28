import './userProfile.styles.css'

import { IoMdArrowDropdown, IoMdSettings } from "react-icons/io"

import { CiLogout } from "react-icons/ci"
import { FaRegUserCircle } from "react-icons/fa"
import { Navigate } from "../Navigate"
import { UserProfileProps } from "./userProfile.types"

const  user_name = 'David'

export function UserProfile({ openSettings, changeSettings }: UserProfileProps){ 
    return (
        <div className='profile' >
            <div className='profile_wrap'>
                <div > Olá, {user_name}</div>
                <FaRegUserCircle className='profile_icon'/>
                <IoMdArrowDropdown onClick={()=>changeSettings('user')} className={`profile_setting ${openSettings ? 'open' : '' } `} />
                {openSettings && 
                <div className='profile_options'>
                    <IoMdSettings /> 
                    <Navigate url="/alterar-senha">
                        Alterar senha
                    </Navigate>
                    <CiLogout />
                    <Navigate url="/login">
                        Sair                        
                    </Navigate>
                </div>}
            </div>
        </div>
    )
}