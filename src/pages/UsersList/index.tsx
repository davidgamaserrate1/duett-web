import './userList.styles.css'

import { Header } from "../../components/Header";
import { TableUsers } from "../../components/TableUsers";

export function UsersList(){
    return(
        <>
            <Header />
            <div className='table_section'>
                <TableUsers />
            </div>
        </>
    )
}