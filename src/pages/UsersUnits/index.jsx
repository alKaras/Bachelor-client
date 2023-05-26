import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import myUsersUnits from './UserUnits.module.scss'
import UnitsAllTable from '../../components/UnitsAllTable'
import { useDispatch, useSelector } from 'react-redux'
import { infoAboutAllUnits, getUnits } from '../../redux/slices/unitSlice'


export default function UsersUnits() {
    const dispatch = useDispatch();
    const isUnitsLoading = useSelector((state) => state.units.isLoading === 'loaded');

    const units_all = useSelector(infoAboutAllUnits);
    useEffect(() => {
        dispatch(getUnits());
    }, [dispatch]);

    return (
        <>
            <Header />
            <div className={`${myUsersUnits.root} vh-100`}>
                <h2 className={`${myUsersUnits['cab-head']} text-center`}>
                    Передані показники користувачів
                </h2>
                <UnitsAllTable loaded={isUnitsLoading} units={units_all} />
            </div>
            <Footer />
        </>
    )
}