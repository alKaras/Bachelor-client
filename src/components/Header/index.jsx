import React from 'react'
import { Nav, Navbar, Button, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import myHeader from './Header.module.scss';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { infoAboutUser, logout, selectIsLogged } from '../../redux/slices/loginSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const Colors = {
    "Brand": "#150578",
}
export default function Header() {
    const isLogged = useSelector(selectIsLogged);
    const user = useSelector(infoAboutUser);
    const location = useLocation();
    const isGuestHome = (location.pathname === '/');
    const isGuestService = (location.pathname === '/service');
    const isGuestPrices = (location.pathname === '/prices');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOutHandler = () => {
        dispatch(logout());
        window.localStorage.removeItem("token");
        navigate('/');
    }
    return (
        <Navbar expand="md" className={`${myHeader.root} d-flex justify-content-between`} >

            <LinkContainer to={'/'} onClick={logOutHandler}>
                <Navbar.Brand className='d-flex align-items-center'>
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className='align-middle' />
                    <p className={myHeader['brand-text']}>Sum<span style={{ color: Colors.Brand }}>Energo</span></p>
                </Navbar.Brand>
            </LinkContainer>
            {isLogged && !isGuestHome && !isGuestService && !isGuestPrices ? (
                <>
                    <Nav>
                        <Dropdown align="end">
                            <Dropdown.Toggle className='d-flex align-items-center justify-content-center' >
                                <h1 className='mb-0 me-1'>{user.fname} {user.lname}</h1>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className='mt-3 p-3'>
                                {user.role === "admin" ? (
                                    <>
                                        <LinkContainer className={`${myHeader['drop-link']}`} to='/adminCabinet'>
                                            <Dropdown.Item>Кабінет</Dropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer className={`${myHeader['drop-link']}`} to='/userservice'>
                                            <Dropdown.Item>Замовлені послуги</Dropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer className={`${myHeader['drop-link']}`} to='/user-units'>
                                            <Dropdown.Item>Передані показники</Dropdown.Item>
                                        </LinkContainer>
                                    </>
                                ) :
                                    <>
                                        <LinkContainer className={`${myHeader['drop-link']}`} to='/userCabinet'>
                                            <Dropdown.Item >Кабінет</Dropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to='/send-unit'>
                                            <Dropdown.Item className={`${myHeader['drop-link']}`}>Передати показання</Dropdown.Item>
                                        </LinkContainer>
                                        <Dropdown.Item href="#/action-2" className={`${myHeader['drop-link']}`}>Послуги</Dropdown.Item>
                                    </>
                                }


                                <Dropdown.Item onClick={logOutHandler} className={`${myHeader['drop-link']}`}>Вийти</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </>
            ) :
                <>
                    <Nav className={`${myHeader['btn-login']} ms-auto`}>
                        <LinkContainer to={'/sign-in'} >
                            <Button className='btn btn-primary'>Увійти</Button>
                        </LinkContainer>
                    </Nav>
                    <Navbar.Toggle className={`${myHeader['btn-collapse']}`} aria-controls="basic-navbar-nav" />



                    <NavbarCollapse id='basic-nav-collapse' className='justify-content-center'>
                        <Nav className=" text-center">
                            <LinkContainer to={'/'} >
                                <Nav.Link className={`${myHeader['nav-text']}`}>Головна</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/service'} >
                                <Nav.Link className={`${myHeader['nav-text']}`}>Послуги</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/prices'} >
                                <Nav.Link className={`${myHeader['nav-text']}`}>Тарифи</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </NavbarCollapse>
                </>
            }
        </Navbar >
    )
}