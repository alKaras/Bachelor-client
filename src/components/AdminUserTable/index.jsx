import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers, getUsers, selectDeletedInfo } from '../../redux/slices/loginSlice';

export default function AdminUserTable() {
    const dispatch = useDispatch();
    const deletedUser = useSelector(selectDeletedInfo);
    const loaded = useSelector((state) => state.logreg.isLoading === 'loaded');
    const users = useSelector(fetchUsers);
    const handleDelete = (userId) => {
        dispatch(deleteUser(userId));
    }
    useEffect(() => {
        dispatch(getUsers());

        if (deletedUser) {
            dispatch(getUsers());
        }
    }, [dispatch, deletedUser])
    return (
        <Table striped bordered hover>
            <thead className='text-center'>
                <tr>
                    <th>№</th>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Адреса</th>
                    <th>Пошта</th>
                    <th>Роль</th>
                    <th>Опції</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    loaded ? users.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{obj.fname}</td>
                                <td>{obj.lname}</td>
                                <td>{obj.address}</td>
                                <td>{obj.email}</td>
                                <td>{obj.role}</td>
                                <td>
                                    <button onClick={() => handleDelete(obj._id)} className='btn btn-warning'>
                                        Видалити
                                    </button>
                                </td>
                            </tr>
                        )
                    }) :
                        <tr>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                            <td>Loading...</td>
                        </tr>
                }
            </tbody>
        </Table>
    )
}