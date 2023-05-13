import React from 'react'
import myFooter from './Footer.module.scss';
export default function Footer() {
    return (
        <footer className={`${myFooter.footer} text-center`}>
            <div className='copyright'>
                Copyright SumEnergo &copy; 2023
            </div>
        </footer>
    )
}