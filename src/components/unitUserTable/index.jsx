import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import { getUnitById, infoAboutUnits, isUnitSent } from '../../redux/slices/unitSlice';
export default function UnitUserTable() {
    const styles = {
        overtable: {
            maxHeight: "350px",
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
    const isSent = useSelector(isUnitSent);
    const dispatch = useDispatch();
    const isUnitsLoading = useSelector((state) => state.units.isLoading === "loaded");
    useEffect(() => {
        dispatch(getUnitById());

        if (isSent){
            dispatch(getUnitById());
        }
    }, [dispatch, isSent])
    const data = useSelector(infoAboutUnits);
    return (

        <div style={styles.overtable}>
            <Table striped bordered hover >
                <thead className={`text-center`} style={styles.thead}>
                    <tr>
                        <th>Показник</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {isUnitsLoading ?
                        data.map((unit, index) => {
                            return (
                                <tr key={index} className='text-center'>
                                    <td>{unit.unitNo}</td>
                                    <td><Moment format='DD-MM-YYYY' >{unit.date}</Moment></td>
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
        </div>
    )
}
