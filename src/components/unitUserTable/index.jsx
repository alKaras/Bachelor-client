import React from 'react'
import { Table } from 'react-bootstrap';
export default function UnitUserTable({ units, loaded }) {
    return (

        <Table striped bordered hover>
            <thead className='text-center'>
                <tr>
                    <th>Показник</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody>
                {loaded ?
                    units.map((unit, index) => {
                        return (
                            <tr key={index} className='text-center'>
                                <td>{unit.unitNo}</td>
                                <td>{unit.formattedDate}</td>
                            </tr>
                        )

                    })
                    :
                    <tr>
                        <td>Loading...</td>
                        <td>Loading...</td>
                    </tr>
                }

            </tbody>
        </Table>
    )
}
