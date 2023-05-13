import React, { useEffect } from 'react'
import { Row, Col, Table } from 'react-bootstrap';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import myCabinet from './UserCabinet.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { infoAboutUser } from '../../redux/slices/loginSlice';
import { infoAboutUnits, getUnitById } from '../../redux/slices/unitSlice';


export default function UserCabinet() {
    const user = useSelector(infoAboutUser);
    const data = useSelector(infoAboutUnits);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUnitById());
    }, [dispatch])


    return (
        <>
            <Header />
            <div className={`${myCabinet.root} vh-100 position-relative`}>
                <h1 className={`${myCabinet['cab-head']}`}>Привіт, {user.fname}. Вітаємо у власному кабінеті </h1>
                <div className={`${myCabinet['cab-body']}`}>Таблиця поточних показників</div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Показник</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {data.map(i => {
                            return <tr>
                                <td>{i.userNo}</td>
                                <td>{i.formattedDate}</td>
                            </tr>
                        })} */}
                    </tbody>
                </Table>
            </div>
            <Footer />
        </>
    )
}