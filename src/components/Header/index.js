import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import myHeader from './Header.module.scss';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Colors = {
    "Brand": "#150578",
}
export default function Header() {
    return (
        <Navbar expand="md" className={`${myHeader.root} d-flex justify-content-between`} >

            <LinkContainer to={'/'}>
                <Navbar.Brand className='d-flex align-items-center'>
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className='align-middle' />
                    <p className={myHeader['brand-text']}>Sum<span style={{ color: Colors.Brand }}>Energo</span></p>
                </Navbar.Brand>
            </LinkContainer>
            <Nav className={`${myHeader['btn-login']} ms-auto`}>
                <LinkContainer to={'/login'} >
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

        </Navbar >
    )
}