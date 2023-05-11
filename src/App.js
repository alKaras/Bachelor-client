import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Service from './pages/Service';
import Login from './components/Login';

export default function App() {
    return (
        <div className="_container">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service' element={<Service />} />
                <Route path='/sign-in' element={<Login />} />
                {/* <Route path='/adminDash' element={<AdminDash />} />
                <Route path='/userAccount' element={<UserAccount />} />
                <Route path='/login' element={<Login />} /> */}

            </Routes>
        </div>
    );
}
