import React from 'react'
import { Table } from 'react-bootstrap'

export default function UnitsAllTable({ units, loaded }) {
    
    return (
        <Table striped bordered hover>
            <thead className='text-center'>
                <tr>
                    <th>Показники</th>
                    <th>Дата</th>
                    <th>Адреса споживача</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                {
                    loaded ? units.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <td>{obj.unitNo}</td>
                                <td>{obj.date}</td>
                                <td>{obj.ownerAddress}</td>
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
                        </tr>
                }
            </tbody>
        </Table>
    )
}