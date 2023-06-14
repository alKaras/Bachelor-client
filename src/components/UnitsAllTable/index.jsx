import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUnitById, getUnits, infoAboutAllUnits, selectDeletedUnit } from '../../redux/slices/unitSlice';
import Moment from 'react-moment';

export default function UnitsAllTable() {
    const styles = {
        overtable: {
            maxHeight: "500px",
            overflowY: "scroll",
            width: "100%",
        },
        thead: {
            margin: "0 0 0 0",
            backgroundColor: "#fff",
            position: "sticky",
            top: "0px",
        }
    }
    const dispatch = useDispatch();
    const isUnitsLoading = useSelector((state) => state.units.isLoading === 'loaded');
    const deletedUnit = useSelector(selectDeletedUnit);
    const unitsall = useSelector(infoAboutAllUnits);
    useEffect(() => {
        dispatch(getUnits());

        if (deletedUnit){
            dispatch(getUnits());
        }

    }, [dispatch, deletedUnit]);

    const handledelete = (unitID) => {
        console.log(unitID);
        dispatch(deleteUnitById(unitID));
    }

    
    return (
        <div style={styles.overtable}>
            <Table striped bordered hover>
                <thead className='text-center'>
                    <tr>
                        <th>№</th>
                        <th>Показники</th>
                        <th>Дата</th>
                        <th>Адреса споживача</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {
                        isUnitsLoading ? unitsall.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{obj.unitNo}</td>
                                    <td><Moment format='DD-MM-YYYY'>{obj.date}</Moment></td>
                                    <td>{obj.ownerAddress}</td>
                                    <td>
                                        <button onClick={() => handledelete(obj._id)} className='btn btn-warning'>
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
        </div>
    )
}