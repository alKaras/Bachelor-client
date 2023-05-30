import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import UserCabinet from './pages/UserCabinet';
import AdminCabinet from './pages/AdminCabinet';
import SendUnits from './pages/SendUnits'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/slices/loginSlice';
import Register from './pages/Register';
import UsersUnits from './pages/UsersUnits';
import UserService from './pages/UserService';
import AdminService from './pages/AdminService';
import Support from './pages/Support';

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    return (
        <div className="_container">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<Register />} />
                <Route path='/adminCabinet' element={<AdminCabinet />} />
                <Route path='/userCabinet' element={<UserCabinet />} />
                <Route path='/send-unit' element={<SendUnits />} />
                <Route path='/user-units' element={<UsersUnits />} />
                <Route path='/order-service' element={<UserService />} />
                <Route path='/userservice' element={<AdminService />} />
                <Route path='/support' element={<Support />} />
            </Routes>
        </div>
    );
}
