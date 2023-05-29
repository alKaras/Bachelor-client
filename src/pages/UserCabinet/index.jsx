import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import myCabinet from './UserCabinet.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { infoAboutUnits, getUnitById } from '../../redux/slices/unitSlice';
import UnitUserTable from '../../components/unitUserTable';


export default function UserCabinet() {

    const dispatch = useDispatch();
    const isUnitsLoading = useSelector((state) => state.units.isLoading === "loaded");
    
    useEffect(() => {
        dispatch(getUnitById());
    }, [dispatch])
    const data = useSelector(infoAboutUnits);
    console.log(data);
    console.log(isUnitsLoading);
    return (
        <>
            <Header />
            <div className={`${myCabinet.root} vh-100 position-relative`}>
                <h1 className={`${myCabinet['cab-head']}`}>Вітаємо у власному кабінеті </h1>
                <div className={`${myCabinet['cab-body']}`}>Таблиця поточних показників</div>
                <UnitUserTable loaded={isUnitsLoading} units={data} />
            </div>
            <Footer />
        </>
    )
}