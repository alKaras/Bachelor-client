import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'
import mySend from './SendUnits.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createUnit } from '../../redux/slices/unitSlice';
import UnitUserTable from '../../components/unitUserTable';

export default function SendUnits() {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.units);


    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            unitNo: "",
        },
        mode: "onChange",
    });

    const onSubmit = (values) => {
        dispatch(createUnit(values));
        reset({ unitNo: "" })
    }

    const [prevnum, setPrevNum] = useState("");
    const [nextnum, setNextnum] = useState("");
    const [result, setResult] = useState("0");

    const usedEnergy = nextnum - prevnum;
    const CalculatePrices = () => {
        if (usedEnergy > 250) {
            let res = usedEnergy * 1.68;
            setResult(res.toFixed(2));

        } else {
            let res = usedEnergy * 1.44;
            setResult(res.toFixed(2));
        }
    }
    return (
        <>
            <Header />
            <div className={`${mySend['content']}`}>
                <Row>
                    <Col className="d-flex flex-column align-items-center jusify-content-center mb-4">
                        <h2 className={`${mySend['content-head']} text-center`}>Форма відправки показників</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className={`${mySend['form-send']}`}>
                            <div>
                                <input
                                    type="number"
                                    placeholder="Введіть поточні показники"
                                    {...register('unitNo', { required: `Це поле є обов'язковим`, pattern: { value: /^[1-9]\d*$/, message: "Некоректний формат показника" } })}
                                />

                            </div>
                            {errors.unitNo && <div className={`${mySend['error-style']}`}>{errors.unitNo.message}</div>}
                            <button type="submit" className="btn btn-primary">Передати</button>

                            {error && <div className={`${mySend.error}`}>{error}</div>
                            }
                        </form>
                        <UnitUserTable />
                    </Col>
                    <Col className='d-flex flex-column align-items-center'>
                        <h2 className={`${mySend['content-head']} text-center`}>Калькулятор тарифів</h2>
                        <div className={`${mySend['form-send']}`}>
                            <div className='d-flex flex-column'>
                                <label>Попередній показник</label>
                                <input
                                    type="number"
                                    value={prevnum}
                                    onChange={(e) => setPrevNum(e.target.value)}
                                />
                                {prevnum < 0 && <div className={`${mySend['error-style']}`}>Некоректний формат</div>}
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Поточний показник</label>
                                <input
                                    type="number"
                                    value={nextnum}
                                    onChange={(e) => setNextnum(e.target.value)}
                                />
                                {(nextnum <= 0 || nextnum <= prevnum) && <div className={`${mySend['error-style']}`}>Некоректний формат</div>}
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Спожита електроенергія</label>
                                <input
                                    type="number"
                                    value={usedEnergy}
                                    disabled
                                />
                                {usedEnergy < 0 && <div className={`${mySend['error-style']}`}>Некоректний формат</div>}
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Тарифи</label>
                                <div className="d-flex gap-3 form-price">
                                    <div className='d-flex flex-column'>
                                        Менше 250 <br /> спожитої енергії
                                        <input type="number"
                                            value={144}
                                            disabled />
                                    </div>
                                    <div className='d-flex flex-column'>
                                        Більше 250 <br /> спожитої енергії
                                        <input type="number"
                                            value={168}
                                            disabled />
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div>
                                    <label className='me-2'>Вартість</label>
                                    <input
                                        type="text"
                                        value={result + " грн"}
                                        disabled
                                    />
                                </div>
                                <div className='align-self-center'>
                                    {usedEnergy < 0 ? <>
                                        <button onClick={CalculatePrices} disabled className='btn btn-primary form-button'>Розрахувати</button>
                                    </> :
                                        <button onClick={CalculatePrices} className='btn btn-primary form-button'>Розрахувати</button>
                                    }

                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>

            </div>
        </>
    )
}