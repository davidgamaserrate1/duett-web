import './header.styles.css'

import { AdminProfile } from '../AdminProfile';
import { FaHome } from "react-icons/fa";
import { Navigate } from '../Navigate';
import { UserProfile } from '../UserProfile';
import { useAuth } from '../../context/Hooks/useAuth';
import { useState } from 'react';

export function Header(){
    const [openSettings,setOpenSettings] = useState(false)
    const [openSettingsAdmin,setOpenSettingsAdmin] = useState(false)

    const auth = useAuth()
    const is_admin = auth.profile === "ADMIN"
    

    function changeSettings (type:string) {
        if(type=== 'admin'){
            setOpenSettings(false)
            setOpenSettingsAdmin(!openSettingsAdmin)
        }
        if(type=== 'user'){
            setOpenSettings(!openSettings)
            setOpenSettingsAdmin(false)
        }
    }
    
    return(
        <header className="header">
            <div className='home'>
                <FaHome className='home_icon' />
                <Navigate url='/home' >
                    <div className='home_nav'> Home</div>
                </Navigate>
            </div>
            <div className='profile_admin_settings'>
                {is_admin && 
                    <AdminProfile 
                        openSettingsAdmin={openSettingsAdmin} 
                        changeSettings={changeSettings } 
                    />
                }
                <UserProfile 
                    openSettings={openSettings} 
                    changeSettings={changeSettings} 
                />
            </div>
        </header>
    )
}
