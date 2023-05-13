import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentHome from '../../components/ContentHome';
export default function Home() {
    const isLogged = false;
    return (
        <>
            <Header />
            <ContentHome />
            <Footer />
        </>
    )
}