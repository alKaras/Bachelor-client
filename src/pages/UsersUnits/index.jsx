import React, { useEffect } from 'react'
import Header from '../../components/Header'
import myUsersUnits from './UserUnits.module.scss'
import UnitsAllTable from '../../components/UnitsAllTable'
import { useDispatch, useSelector } from 'react-redux'
import { getSumAllUnits, selectSumOfAllUnits } from '../../redux/slices/unitSlice'


export default function UsersUnits() {
    const dispatch = useDispatch();
    const isLoaded = useSelector((state) => state.units.isLoading);
    const sum = useSelector(selectSumOfAllUnits);
    useEffect(() => {
        dispatch(getSumAllUnits());
    }, [dispatch])
    console.log(sum);
    return (
        <>
            <Header />
            <div className={`${myUsersUnits.root}`}>
                <h2 className={`${myUsersUnits['cab-head']} text-center`}>
                    Передані показники користувачів
                </h2>
                <div className='mb-4'>Всього спожито електроенергії користувачами: {isLoaded ? <span>{sum} кВт⋅год</span> : <span>Loading...</span>}</div>
                <UnitsAllTable />
            </div>
        </>
    )
}