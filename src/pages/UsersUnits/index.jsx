import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import myUsersUnits from './UserUnits.module.scss'
import UnitsAllTable from '../../components/UnitsAllTable'


export default function UsersUnits() {

    return (
        <>
            <Header />
            <div className={`${myUsersUnits.root}`}>
                <h2 className={`${myUsersUnits['cab-head']} text-center`}>
                    Передані показники користувачів
                </h2>
                <UnitsAllTable />
            </div>
            <Footer />
        </>
    )
}