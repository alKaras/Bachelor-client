import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import servicepage from './Service.module.scss';
import { Col, Row } from 'react-bootstrap';
export default function ServicePage() {
    return (
        <>
            <Header />
            <div className={`${servicepage.root}`}>
                <div className={`${servicepage.content}`}>
                    <h2 className={`${servicepage['title']}`}>Послуги нашої компанії</h2>
                    <p className={`${servicepage['body-text']}`}>
                        Наша компанія надає низку послуг, які можуть задовольнити ваші потреби <br />
                    </p>
                    <Row className='d-flex align-items-center gap-5 mb-5'>
                        <Col className={`${servicepage['card-service']} d-flex flex-column align-items-center`}>
                            <img src="images/sunpanels.jpg" className='img-fluid' alt="sunpanels" />
                            <div className={`${servicepage['card-title']}`}>Встановлення сонячних панелей</div>
                            <div className={`${servicepage['card-body']}`}>
                                Наша команда готова встановити та налаштувати сонячні панелі на вашій території.
                            </div>
                            <div className={`${servicepage['card-footer']}`}>
                                Ціна послуги: <span className={`${servicepage['card-price']}`}>2000</span>
                            </div>
                        </Col>
                        <Col className={`${servicepage['card-service']} d-flex flex-column align-items-center`}>
                            <img src="images/powerconnect.jpg" className='img-fluid' alt="sunpanels" />
                            <div className={`${servicepage['card-title']}`}>Відключення електроенергії та лічильника</div>
                            <div className={`${servicepage['card-body']}`}>
                                Наша команда може відключити вас від основної мережі та відключити ваш лічильник
                            </div>
                            <div className={`${servicepage['card-footer']}`}>
                                Ціна послуги: <span className={`${servicepage['card-price']}`}>500</span>
                            </div>
                        </Col>
                        <Col className={`${servicepage['card-service']} d-flex flex-column align-items-center`}>
                            <img src="images/powercut.jpg" className='img-fluid' alt="sunpanels" />
                            <div className={`${servicepage['card-title']}`}>Встановлення та налаштування лічильника</div>
                            <div className={`${servicepage['card-body']}`}>
                                Наша команда готова підключити вас до основної мережі електроенергії та налаштувати лічильник
                            </div>
                            <div className={`${servicepage['card-footer']}`}>
                                Ціна послуги: <span className={`${servicepage['card-price']}`}>500</span>
                            </div>
                        </Col>
                    </Row>
                    <div className={`${servicepage['cta']}`}>
                        Якщо Вам сподобалась послуга та бажаєте її замовити - Увійдіть або зареєструйтесь та зробіть це у власному кабінеті
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}