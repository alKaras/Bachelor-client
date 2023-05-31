import React, { useEffect } from 'react'
import Header from '../../components/Header'
import adminservice from './AdminService.module.scss';
import AdminServicesTable from '../../components/AdminServicesTable';
import { Table } from 'react-bootstrap';
import { PricesData, fetchPrices } from '../../redux/slices/priceSlice';
import { useDispatch, useSelector } from 'react-redux';
export default function AdminService() {
    const isLoaded = useSelector((state) => state.prices.isLoading === 'loaded');
    const prices = useSelector(PricesData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPrices());
    }, [dispatch]);
    return (
        <>
            <Header />
            <div className={`${adminservice.root}`}>
                <h1 className={`${adminservice['cab-head']}`}>Вітаємо в адмін панелі!</h1>
                <div className={`${adminservice['cab-body']}`}>
                    Таблиця актуальних замовлень.
                </div>
                <div className={`${adminservice['pricelist']}`}>
                    <Table striped bordered hover style={{ maxWidth: "500px" }}>
                        <thead className='text-center'>
                            <tr>
                                <th>Послуга</th>
                                <th>Ціна</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                isLoaded ?
                                    <>
                                        <tr>
                                            <td>{prices[0].sunpanels}</td>
                                            <td>{prices[0].suncost}</td>
                                        </tr>
                                        <tr>
                                            <td>{prices[0].powerconnect}</td>
                                            <td>{prices[0].powerconcost}</td>
                                        </tr>
                                        <tr>
                                            <td>{prices[0].powercut}</td>
                                            <td>{prices[0].powercutcost}</td>
                                        </tr>
                                    </>
                                    :
                                <>
                                    <tr>
                                        <td>Loading...</td>
                                        <td>Loading...</td>
                                    </tr>
                                    <tr>
                                        <td>Loading...</td>
                                        <td>Loading...</td>
                                    </tr>
                                    <tr>
                                        <td>Loading...</td>
                                        <td>Loading...</td>
                                    </tr>
                                </>

                            }
                        </tbody>
                    </Table>
                </div>
                <AdminServicesTable />
            </div>
        </>
    )
}