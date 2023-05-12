import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Service from './pages/Service';
import Login from './pages/Login';
import UserCabinet from './pages/UserCabinet';
import AdminCabinet from './pages/AdminCabinet';
export default function App() {
    return (
        <div className="_container">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service' element={<Service />} />
                <Route path='/sign-in' element={<Login />} />
                <Route path='/adminCabinet' element={<AdminCabinet />} />
                <Route path='/userCabinet' element={<UserCabinet />} />

            </Routes>
        </div>
    );
}
