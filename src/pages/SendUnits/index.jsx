import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import mySend from './SendUnits.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUnit } from '../../redux/slices/unitSlice';

export default function SendUnits() {
    const { error } = useSelector((state) => state.units);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            unitNo: 0,
        },
        mode: "onChange",
    });

    const onSubmit = (values) => {
        dispatch(createUnit(values));
        reset({ unitNo: 0 })
    }
    return (
        <>
            <Header />
            <div className={`${mySend['content']} vh-100`}>
                <Row>
                    <Col className="d-flex flex-column align-items-center jusify-content-center">
                        <h2 className={`${mySend['content-head']} text-center`}>Форма відправки показників</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className={`${mySend['form-send']}`}>
                            <div>
                                <input
                                    type="number"
                                    placeholder="Введіть поточні показники"
                                    {...register('unitNo', { required: `Це поле є обов'язковим` })}
                                />

                            </div>
                            {errors.unitNo && <div className={`${mySend['error-style']}`}>{errors.unitNo.message}</div>}
                            <button type="submit" className="btn btn-primary">Передати</button>

                            {error && <div className={`${mySend.error}`}>{error}</div>
                            }
                        </form>
                    </Col>
                    <Col>
                        <h2 className={`${mySend['content-head']} text-center`}>Калькулятор тарифів</h2>
                    </Col>
                </Row>

            </div>
            <Footer />
        </>
    )
}