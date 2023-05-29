import React, { useEffect } from 'react'
import Header from '../../components/Header'
import userservice from './UserService.module.scss';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { infoAboutUser } from '../../redux/slices/loginSlice';
import { useForm } from 'react-hook-form';
import { PricesData, fetchPrices } from '../../redux/slices/priceSlice';
import { Table } from 'react-bootstrap';
import { createReqService } from '../../redux/slices/serviceSlice';

export default function UserService() {
    const user = useSelector(infoAboutUser);
    const isLoaded = useSelector((state) => state.prices.isLoading === 'loaded');
    const isUserLoaded = useSelector((state) => state.logreg.isLoading === 'loaded');
    const submitted = useSelector((state) => state.services.statussend);
    const prices = useSelector(PricesData);
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(createReqService(values));

    }
    

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            type: "",
            useremail: isUserLoaded ? user.email : "",
        },
        mode: "onChange",
    });
    useEffect(() => {
        dispatch(fetchPrices());
        if (submitted) {
            reset({
                type: "",
                useremail: isUserLoaded ? user.email : "",
            })
        }
    }, [dispatch, submitted, isUserLoaded, reset, user])

    return (
        <>
            <Header />
            <div className={`${userservice.root}`}>
                <div className={`${userservice.content}`}>
                    <h2 className={`${userservice['title']}`}>Послуги</h2>
                    <div className={`${userservice['body']}`}>
                        Послуги нашої компанії не обмежуються лише електропостачанням. Ми також пропонуємо інсталяцію сучасного обладнання, встановлення сучасних сонячних панелей та налаштування їх та відключення електроенергії. <br />
                        <p className='mt-3'>З вартістю наявних послуг ви можете ознайомитись нижче.</p>
                    </div>
                    <Table striped bordered hover style={{ maxWidth: "500px" }}>
                        <thead className='text-center'>
                            <tr>
                                <th>Послуга</th>
                                <th>Ціна</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                isLoaded ?
                                    <>
                                        <tr>
                                            <td>{prices[0].sunpanels}</td>
                                            <td>{prices[0].suncost}</td>
                                        </tr>
                                        <tr>
                                            <td>{prices[0].powerconnect}</td>
                                            <td>{prices[0].powerconcost}</td>
                                        </tr>
                                        <tr>
                                            <td>{prices[0].powercut}</td>
                                            <td>{prices[0].powercutcost}</td>
                                        </tr>
                                    </>
                                    :
                                    <>
                                        <tr>
                                            <td>Loading...</td>
                                            <td>Loading...</td>
                                        </tr>
                                        <tr>
                                            <td>Loading...</td>
                                            <td>Loading...</td>
                                        </tr>
                                        <tr>
                                            <td>Loading...</td>
                                            <td>Loading...</td>
                                        </tr>
                                    </>

                            }
                        </tbody>
                    </Table>

                    <div className={`${userservice.cta}`}>
                        З нами ви станете володарем власної енергії! Давайте почнемо цей захоплюючий шлях разом! <br />
                        <span>Заповнюйте форму та натискайте замовити, наш консультант зв'яжеться з вами для уточнення деталей</span>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <form onSubmit={handleSubmit(onSubmit)} className={`${userservice['service-form']}`}>
                            <div className={`${userservice['service-form-content']}`}>
                                <h3 className={`${userservice['service-form-title']}`}>Залишайте заяву на послугу</h3>
                                <div className="d-flex flex-column">
                                    <label>Ваша пошта</label>
                                    <input
                                        type="text"
                                        {...register("useremail")}
                                        disabled
                                    />
                                </div>
                                <div className="d-flex flex-column">
                                    <label>Послуга</label>
                                    <select {...register("type")}>
                                        <option value="sunpanels">Встановлення сонячних панелей</option>
                                        <option value="powercut">Відключення лічильника</option>
                                        <option value="powerconnect">Підключення та налаштування лічильника</option>
                                    </select>
                                    {errors.type && <div className={`${userservice['error-style']}`}>{errors.type.message}</div>}
                                </div>

                                <div className='d-flex justify-content-center align-items-center'>
                                    <button type="submit" className='btn btn-primary'>{submitted ? <span>Відправлено</span> : <span>Замовити</span>}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}