import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Chatbot from 'react-chatbot-kit';
import config from '../../utils/chatbot/config';
import ActionProvider from '../../utils/chatbot/ActionProvider';
import MessageParser from '../../utils/chatbot/MessageParser';
import 'react-chatbot-kit/build/main.css'
import styles from './Support.module.scss';
export default function Support() {
    return (
        <>
            <Header />
            <div className={`${styles.root}`}>
                <div className='d-flex align-items-center justify-content-center'>
                    <Chatbot
                        config={config}
                        actionProvider={ActionProvider}
                        messageParser={MessageParser}
                        headerText='Інтерактивний-бот SumEnergo'
                    />
                </div>
            </div>

            <Footer />
        </>
    )
}