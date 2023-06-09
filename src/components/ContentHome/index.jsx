import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import myContentHome from './ContentHome.module.scss';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function ContentHome() {
    return (
        <div >
            <Row className={`${myContentHome.root} d-flex align-items-center`}>
                <Col lg={6} md={6} sm={12} xs={12} className={`${myContentHome['content']}`}>
                    <h1 className={`${myContentHome['head-text']}`}>
                        Набридли проблеми з електропостачанням?
                    </h1>
                    <p className={`${myContentHome['body-text']}`}>
                        Не витрачайте свій час на пошук надійного постачальника електроенергії - приєднуйтеся до нашої спільноти задоволених клієнтів вже сьогодні.
                    </p>
                    <ScrollLink
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        <Button className={`btn btn-primary`}>Дізнатись більше</Button>
                    </ScrollLink>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12} className='d-flex align-items-center'>
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
            <div className={`${myContentHome.about}`} id='about'>
                <h2 className={`${myContentHome['head-text']}`}>Про компанію</h2>
                <p className={`${myContentHome['about-text']}`}>
                    Ми забезпечуємо надійне та безперебійне постачання електроенергії для вашого дому та бізнесу.
                    Наша команда фахівців працює цілодобово, щоб забезпечити максимальний комфорт та безпеку для наших клієнтів.
                </p>
                <Row className={`${myContentHome.cards}`}>
                    <Col lg={4} md={12} sm={12} xs={12}>
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
                    <Col lg={4} md={12} sm={12} xs={12}>
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
                    <Col lg={4} md={12} sm={12} xs={12}>
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

            <div className={`${myContentHome['contacts']}`}>
                <h2 className={`${myContentHome['head-text']}`}>Контакти</h2>
                <p className={`${myContentHome['about-text']}`}>
                    <p className={`${myContentHome['contact-text']}`}>Будемо раді почути вас!</p>
                    Зв'яжіться з нами вже сьогодні та довірте свої потреби в електропостачанні нам. Ми завжди готові допомогти вам забезпечити стабільну та надійну енергію для вашого життя та роботи.
                </p>
                <div className={`${myContentHome['contact-link']}`}>
                    <p>Зв'яжіться з нами за допомогою наступних контактних даних</p>
                    <p>Телефон: <span>+380500000000</span></p>
                    <p> Пошта: <span>sumenergo.wrk@gmail.com</span></p>


                </div>





            </div>

        </div>
    )
}