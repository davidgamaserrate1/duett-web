import './userList.styles.css'

import { Header } from "../../components/Header";
import { Helmet } from 'react-helmet-async';
import { TableUsers } from "../../components/TableUsers";

export function UsersList(){
    return(
        <>
            <Helmet><title>Usuários - Duett</title></Helmet>
            <Header />
            <div className='table_section'>
                <TableUsers />
            </div>
        </>
    )
}