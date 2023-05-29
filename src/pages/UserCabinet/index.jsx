import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import myCabinet from './UserCabinet.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSumUserUnits, selectSumOfUsUnits } from '../../redux/slices/unitSlice';

export default function UserCabinet() {
    const dispatch = useDispatch();
    const isLoaded = useSelector((state) => state.units.isLoading === 'loaded');
    const sum = useSelector(selectSumOfUsUnits);
    useEffect(() => {
        dispatch(getSumUserUnits());
    }, [dispatch])
    return (
        <>
            <Header />
            <div className={`${myCabinet.root} vh-100 position-relative`}>
                <h1 className={`${myCabinet['cab-head']}`}>Вітаємо у власному кабінеті </h1>
                <div className={`${myCabinet['cab-body']}`}>Інформація вашого профілю</div>
                <div className={`${myCabinet['sumunits-badge']} d-flex flex-column align-content-center justify-content-center`}>
                    <p>Спожита енергія</p>
                    {isLoaded ? sum : ""}кВт⋅год
                </div>
            </div>
            <Footer />
        </>
    )
}