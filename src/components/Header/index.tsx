import './header.styles.css'

import { FaHome } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { useState } from 'react';

const  user_name = 'David'
const is_admin = true


export function Header(){
    const [openSettings,setOpenSettings] = useState(false)
    const [openSettingsAdmin,setOpenSettingsAdmin] = useState(false)


    function changeSettings (type:string) {
        type==='admin' ? setOpenSettingsAdmin(!openSettingsAdmin) :setOpenSettings(!openSettings)
    }

    return(
        <header className="header">
            <div className='home'>
                <FaHome className='home_icon' />
               <div> Home</div>
            </div>
            <div className='profile_admin_settings'>
                {is_admin && 
                <div className='admin_profile' onClick={()=>changeSettings('admin')}>
                    <div className='admin_wrap'>
                        <div> Admin</div>
                        <MdAdminPanelSettings className='admin_icon'/>
                        <IoMdArrowDropdown  className={`profile_setting ${openSettingsAdmin ? 'open' : '' } `} />
                    </div>
                </div> }
                <div className='profile' onClick={()=>changeSettings('user')}>
                    <div className='profile_wrap'>
                    <div > Olá, {user_name}</div>
                        <FaRegUserCircle className='profile_icon'/>
                        <IoMdArrowDropdown  className={`profile_setting ${openSettings ? 'open' : '' } `} />
                    </div>
                </div>
            </div>
        </header>
    )
}