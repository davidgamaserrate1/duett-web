import './tableUsers.styles.css'

import { useEffect, useState } from 'react';

import { GetUsersList } from '../../services/usersList.service';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin7Fill } from "react-icons/ri";

const users = [
    {
        id: 1,
        name : 'David',
        mail:'david@maildavid',
        cpf : '123123123',
        profile : 'User'
    },
    {
        id: 2 ,
        name : 'Jhon',
        mail:'Jhon@maildavid',
        cpf : '12312323123',
        profile : 'Admin'
    },
    {
        id: 3,
        name : 'Margerett',
        mail:'Admin@Jhon',
        cpf : '123123123',
        profile : 'User'
    },
    {
        id: 4,
        name : 'Cleon',
        mail:'david@maildavid',
        cpf : '3123121233123',
        profile : 'User'
    },
    {
        id: 5,
        name : 'Lion',
        mail:'Jhon@123123123',
        cpf : '123123123',
        profile : 'Admin'
    },
    {
        id: 6,
        name : 'Xmen',
        mail:'david@123123123',
        cpf : '123123123',
        profile : 'Admin'
    },

]

export function TableUsers(){
    const [index, setIndex] = useState(1)

    useEffect(()=>{
        try{
            GetUsersList()
        }catch(error){
            console.log(error)
        }
    },[])

    return (
       <>
        <table className="table_users">
            <tr className='table_head'>
                <th className='head_item'>Nome</th>
                <th className='head_item'>Email</th>
                <th className='head_item'>Cpf</th>
                <th className='head_item' colSpan={2}>Pefil</th>
            </tr>
            {users.map((user) => 
                <tr className='table_items underline'>
                    <td className='item'>{user.name}</td>
                    <td className='item'>{user.mail}</td>
                    <td className='item'>{user.cpf}</td>
                    <td className='item'>{user.profile}</td>
                    <td className='item delete'><RiDeleteBin7Fill /></td>
                </tr>
            )}
            
            <tfoot  className='footer'>
                <div className='tabe_pages'>
                    <IoIosArrowBack/>
                        <span className='page_item'>{index}</span>
                    <IoIosArrowForward/>
                </div>
            </tfoot>
        </table>
       </>
    )
}