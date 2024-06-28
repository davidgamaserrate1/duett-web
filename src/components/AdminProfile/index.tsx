import './adminProfile.styles.css'

import { AdminProfileProps } from "./adminProfile.types";
import { FiUsers } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { Navigate } from '../Navigate';

export function AdminProfile({ openSettingsAdmin, changeSettings }: AdminProfileProps){
    return (
        <div className='admin_profile' >
            <div className='admin_wrap'>
                <div> Admin</div>
                <MdAdminPanelSettings className='admin_icon'/>
                <IoMdArrowDropdown  onClick={()=>changeSettings('admin')} className={`profile_setting ${openSettingsAdmin ? 'open' : '' } `} />
                {openSettingsAdmin && 
                <div className='admin_options'>
                    <Navigate url='/usuarios'>
                        <FiUsers /> <a>Lista de usuários</a>
                    </Navigate>
                </div>}
            </div>
        </div> 
    )
}