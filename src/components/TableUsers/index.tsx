import './tableUsers.styles.css'

import { useEffect, useState } from 'react';

import { GetUsersList } from '../../services/usersList.service';
import { IUserFromList } from './tableUsers.types';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useAuth } from '../../context/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function TableUsers(){
    const navigate = useNavigate()
    const auth = useAuth();

    if (auth.profile !== "ADMIN"){
        navigate("/home")
    }

    const [usersList, setUsersList] = useState<IUserFromList[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                if (auth.token) {
                    const list:any = await GetUsersList(auth.token);
                    setUsersList(list);
                }
            } catch (error) {
                console.error("Error fetching users list", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [auth.token]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
       <>
        <table className="table_users">
            <tr className='table_head'>
                <th className='head_item'>Nome</th>
                <th className='head_item'>Email</th>
                <th className='head_item'>Cpf</th>
                <th className='head_item' colSpan={2}>Pefil</th>
            </tr>
            {usersList.map((user) => 
                <tr className='table_items underline' key={user.id}>
                    <td className='item'>{user.name}</td>
                    <td className='item'>{user.email}</td>
                    <td className='item'>{user.cpf}</td>
                    <td className='item'>{user.profile.toLowerCase()}</td>
                    <td className='item delete'><RiDeleteBin7Fill/></td>
                </tr>
            )}
            
            <tfoot  className='footer'>
                <div className='tabe_pages'>
                    <IoIosArrowBack/>
                        <span className='page_item'>{1}</span>
                    <IoIosArrowForward/>
                </div>
            </tfoot>
        </table>
       </>
    )
}