import React from 'react'
import { Table } from 'react-bootstrap'
export default function AdminUserTable({ users, loaded }) {
    return (
        <Table striped bordered hover>
            <thead className='text-center'>
                <tr>
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
                                <td>{obj.fname}</td>
                                <td>{obj.lname}</td>
                                <td>{obj.address}</td>
                                <td>{obj.email}</td>
                                <td>{obj.role}</td>
                                <td>
                                    <button className='btn btn-warning'>
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