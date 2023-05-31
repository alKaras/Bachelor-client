import React, { useEffect } from 'react'
import Header from '../../components/Header'
import myCabinet from './UserCabinet.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSumUserUnits, selectSumOfUsUnits } from '../../redux/slices/unitSlice';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';
import { UserServicesInfo } from '../../redux/slices/serviceSlice';
import { getUserServices } from '../../redux/slices/serviceSlice';

export default function UserCabinet() {
    const dispatch = useDispatch();
    const isLoaded = useSelector((state) => state.units.isLoading === 'loaded');
    const isServiceLoaded = useSelector((state) => state.services.isLoading === 'loaded');
    const servicesbyId = useSelector(UserServicesInfo);
    const sum = useSelector(selectSumOfUsUnits);
    useEffect(() => {
        dispatch(getSumUserUnits());
        dispatch(getUserServices());
    }, [dispatch])
    return (
        <>
            <Header />
            <div className={`${myCabinet.root} vh-100 position-relative`}>
                <h1 className={`${myCabinet['cab-head']}`}>Вітаємо у власному кабінеті </h1>
                <div className={`${myCabinet['cab-body']}`}>
                    <p>Інформація вашого профілю</p>
                </div>
                <div className={`${myCabinet['sumunits-badge']} d-flex flex-column align-content-center justify-content-center`}>
                    <p>Спожита енергія</p>
                    {isLoaded ? sum : ""}кВт⋅год
                </div>
                <div className={`${myCabinet['Замовлені послуги']}`}>
                    <p className={`${myCabinet['cab-body']}`}>Замовлені послуги</p>
                    <div>
                        <Table striped bordered hover>
                            <thead className='text-center'>
                                <tr>
                                    <th>№</th>
                                    <th>Назва послуги</th>
                                    <th>Статус</th>
                                    <th>Дата надіслення</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    isServiceLoaded ? servicesbyId.map((obj, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    {obj.type === 'sunpanels' ? <span>Встановлення сонячних панелей</span>
                                                        : obj.type === 'powercut' ? <span>Відключення лічнильника</span>
                                                            : <span>Підключення та налаштування лічильника</span>}
                                                </td>
                                                <td>{obj.status ? <span>Підтвердженно</span> : <span>В очікувані</span>}</td>
                                                <td><Moment format='DD-MM-YYYY' >{obj.sendDate}</Moment></td>
                                            </tr>
                                        )
                                    }) :
                                        <tr>
                                            <td>Loading...</td>
                                            <td>Loading...</td>
                                            <td>Loading...</td>
                                            <td>Loading...</td>
                                        </tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}