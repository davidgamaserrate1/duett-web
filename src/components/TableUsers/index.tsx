import './tableUsers.styles.css';

import { DeleteUserById, GetUsersList } from '../../services/users.service';
import { GetUsersListResonse, IUser } from '../../interfaces/User';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';

import { Modal } from '../Modal';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useAuth } from '../../context/Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface YouRowProps {
    name: string;
    id: string;
    loggedInUserId: string;
}

const YouRow: React.FC<YouRowProps> = ({ name }) => (
    <div>
        <span className='its_you_row'>(você)</span> {name}
    </div>
);

export function TableUsers() {
    const [index, setIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState<string | undefined>();

    const navigate = useNavigate();
    const { id: loggedInUserId, profile, token, name } = useAuth();

    if (profile?.toUpperCase() !== "ADMIN"){
        navigate("/home")
    }

    useEffect(() => {
        fetchUsers(index);
    }, [token, index]);

    async function fetchUsers(index: number) {
        try {
            if (token) {
                const list: GetUsersListResonse = await GetUsersList(index, token);
                setUsersList(list.content ?? []);
                setLastIndex(list.totalPages);
            }
        } catch (error) {
            console.error("Error fetching users list", error);
        } 
    }

    async function deleteUser(userId: string) {
        if (token) {
            await DeleteUserById(userId, token);
            handleCloseModal();
            fetchUsers(index);
        }
    }

    function handleOpenModal(userId: string) {
        setSelectedUser(userId);
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
        setSelectedUser(undefined);
    }

    function incrementIndex() {
        if (index < lastIndex) {
            setIndex(index + 1);
        }
    }

    function decrementIndex() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    const disablePrevButton = index === 0;
    const disableNextButton = index + 1 === lastIndex;

    const emptyRows = 10 - usersList.length;
    const emptyCells = Array.from({ length: emptyRows }, (_, i) => (
        <tr key={`empty-${i}`} className='table_items underline'>
            <td className='item'></td>
        </tr>
    ));

    return (
        <div className='table_container'>
            {usersList.length > 0 && (
                <table className="table_users">
                    <thead>
                        <tr className='table_head'>
                            <th className='head_item'>Nome</th>
                            <th className='head_item'>Email</th>
                            <th className='head_item'>Cpf</th>
                            <th className='head_item' colSpan={2}>Perfil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((user) => (
                            <tr className='table_items underline' key={user.id}>
                                <td className='item'>
                                    {user.id === loggedInUserId ? (
                                        <YouRow name={user.name} id={user.id} loggedInUserId={loggedInUserId} />
                                    ) : (
                                        user.name
                                    )}
                                </td>
                                <td className='item'>{user.email}</td>
                                <td className='item'>{user.cpf}</td>
                                <td className='item'>{user.profile.toLowerCase()}</td>
                                <td className='item delete' onClick={() => handleOpenModal(user.id)}>
                                    {user.name !== name && <RiDeleteBin7Fill />}
                                </td>
                            </tr>
                        ))}
                        {emptyCells}
                    </tbody>
                    <tfoot className='footer'>
                        <div className='tabe_pages'>
                            <button className='button_footer' disabled={disablePrevButton} onClick={decrementIndex}>
                                <IoIosArrowBack />
                            </button>
                            <span className='page_item'>{index + 1}</span>
                            <button className='button_footer' disabled={disableNextButton} onClick={incrementIndex}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </tfoot>
                </table>
            )}
            <Modal isOpen={openModal}>
                <div className='remove_confirmation'>
                    <h2 className='remove_title'>Confirmar Exclusão</h2>
                    <p>Deseja realmente excluir este usuário?</p>
                    <div className='modal_actions'>
                        <button className='modal_action confirm' onClick={() => deleteUser(selectedUser ?? '')}>Confirmar</button>
                        <button className='modal_action cancel' onClick={handleCloseModal}>Cancelar</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
