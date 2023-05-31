import React, { useEffect } from 'react'
import Header from '../../components/Header'
import myAdminCab from './AdminCabinet.module.scss';
import AdminUserTable from '../../components/AdminUserTable';
import { useDispatch, useSelector } from 'react-redux';
import { getAmountUsers, selectAmount } from '../../redux/slices/loginSlice';
export default function AdminCabinet() {
    const dispatch = useDispatch();
    const isLoaded = useSelector((state) => state.logreg.isLoading === 'loaded');
    const amountUsers = useSelector(selectAmount);
    console.log(amountUsers);
    useEffect(() => {
        dispatch(getAmountUsers());
    }, [dispatch])
    return (
        <>
            <Header />
            <div className={`${myAdminCab.root}`}>
                <h1 className={`${myAdminCab['cab-head']}`}>Вітаємо в адмін панелі!</h1>
                <div className={`${myAdminCab['cab-body']}`}>
                    Таблиця актуальних користувачів. Всього користувачів - {isLoaded ? amountUsers : 0}
                </div>
                <AdminUserTable />
            </div>
        </>
    )
}