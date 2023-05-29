import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import myAdminCab from './AdminCabinet.module.scss';
import AdminUserTable from '../../components/AdminUserTable';
export default function AdminCabinet() {
    return (
        <>
            <Header />
            <div className={`${myAdminCab.root}`}>
                <h1 className={`${myAdminCab['cab-head']}`}>Вітаємо в адмін панелі!</h1>
                <div className={`${myAdminCab['cab-body']}`}>
                    Таблиця актуальних користувачів
                </div>
                <AdminUserTable />
            </div>
            <Footer />
        </>
    )
}