import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Service from './pages/Service';
import Login from './pages/Login';
import UserCabinet from './pages/UserCabinet';
import AdminCabinet from './pages/AdminCabinet';
import SendUnits from './pages/SendUnits'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, selectIsLogged } from './redux/slices/loginSlice';
import Register from './pages/Register';

export default function App() {
    const dispatch = useDispatch();
    const isLogged = useSelector(selectIsLogged);
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    return (
        <div className="_container">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service' element={<Service />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<Register />} />
                <Route path='/adminCabinet' element={<AdminCabinet />} />
                <Route path='/userCabinet' element={<UserCabinet />} />
                <Route path='/send-unit' element={<SendUnits />} />
            </Routes>
        </div>
    );
}
