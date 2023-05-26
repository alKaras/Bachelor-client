import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import myAdminCab from './AdminCabinet.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, fetchUsers } from '../../redux/slices/loginSlice';
import AdminUserTable from '../../components/AdminUserTable';
export default function AdminCabinet() {
    const dispatch = useDispatch();
    const isUserLoading = useSelector((state) => state.logreg.isLoading === 'loaded');
    const users = useSelector(fetchUsers);
    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <>
            <Header />
            <div className={`${myAdminCab.root} vh-100`}>
                <h1 className={`${myAdminCab['cab-head']}`}>Вітаємо в адмін панелі!</h1>
                <div className={`${myAdminCab['cab-body']}`}>
                    Таблиця актуальних користувачів
                </div>
                <AdminUserTable loaded={isUserLoading} users={users} />
            </div>
            <Footer />
        </>
    )
}