import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import myContentHome from './ContentHome.module.scss';
import { Link } from 'react-router-dom';

export default function ContentHome() {
    return (
        <div >
            <Row className={`${myContentHome.root} align-items-center vh-100`}>
                <Col className={`${myContentHome['content']}`}>
                    <h1 className={`${myContentHome['head-text']}`}>
                        Набридли проблеми з електропостачанням?
                    </h1>
                    <p className={`${myContentHome['body-text']}`}>
                        Не витрачайте свій час на пошук надійного постачальника електроенергії - приєднуйтеся до нашої спільноти задоволених клієнтів вже сьогодні.
                    </p>
                    <Button className='btn btn-primary'>Дізнатись більше</Button>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Link
                        to={'https://bank.gov.ua/ua/about/support-the-armed-forces'}
                        className={`${myContentHome['img-back']}`}
                        target='blank'
                    >
                        <img style={{ border: 0 }}
                            src="/Donate.jpg"
                            alt="Donate"
                            className='img-fluid'
                        />
                    </Link>
                </Col>
            </Row>
            <div className={`${myContentHome.about}`}>
                <h2 className={`${myContentHome['head-text']}`}>Послуги</h2>
                <p className={`${myContentHome['about-text']}`}>
                    Ми забезпечуємо надійне та безперебійне постачання електроенергії для вашого дому та бізнесу.
                    Наша команда фахівців працює цілодобово, щоб забезпечити максимальний комфорт та безпеку для наших клієнтів.
                </p>
                <Row>
                    <Col>
                        <div className={`${myContentHome['speed-card']} d-flex flex-column justify-content-between`}>
                            <div className={`${myContentHome['icon-wrapper']}`}>
                                <img
                                    src="/icons/speed.svg"
                                    alt="speed"
                                    className='text-center'
                                />
                            </div>
                            <div className={`${myContentHome['card-head']}`}>
                                Зручність і швидкість
                            </div>
                            <div className={`${myContentHome['card-body']}`}>
                                Клієнти можуть легко та швидко внести свої показники онлайн без необхідності відвідувати офіс компанії або стояти в черзі
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`${myContentHome['info-card']} d-flex flex-column justify-content-between`}>
                            <div className={`${myContentHome['icon-wrapper']}`}>
                                <img
                                    src="/icons/service.svg"
                                    alt="speed"
                                    className='text-center'
                                />
                            </div>
                            <div className={`${myContentHome['card-head']}`}>
                                Інформаційна база
                            </div>
                            <div className={`${myContentHome['card-body']}`}>
                                Клієнтам надаються різні послуги, тарифи, а також інформація про енергозабезпечення та знижки на послуги.
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={`${myContentHome['faq-card']} d-flex flex-column align-items-between`}>
                            <div className={`${myContentHome['icon-wrapper']}`}>
                                <img
                                    src="/icons/faq.svg"
                                    alt="speed"
                                    className='text-center'
                                />
                            </div>
                            <div className={`${myContentHome['card-head']}`}>
                                Онлайн-підтримка
                            </div>
                            <div className={`${myContentHome['card-body']}`}>
                                У разі виникнення питань щодо рахунків, послуг, клієнти можуть отримати ефективну підтримку за формою зворотнього зв'язку
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}