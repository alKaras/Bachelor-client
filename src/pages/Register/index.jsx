import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import myRegister from './Register.module.scss'
import { useForm } from 'react-hook-form';
import { registerUser, selectIsRegged } from '../../redux/slices/loginSlice';
export default function Register() {
    const navigate = useNavigate();
    const isRegged = useSelector(selectIsRegged);
    const { error } = useSelector((state) => state.logreg);
    const dispatch = useDispatch();
    console.log(error);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            fname: "",
            lname: "",
            patronimic: "",
            address: "",
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const onSubmit = (values) => {
        dispatch(registerUser(values));

    }
    useEffect(() => {
        if (isRegged) {
            navigate('/sign-in')
        }
    }, [isRegged, navigate])
    return (
        <div className={`${myRegister.login}`}>
            <form className={`${myRegister['login-form']}`} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${myRegister['auth-form-content']}`}>
                    <h3 className={`${myRegister['auth-form-title']}`}>Реєстрація</h3>
                    <div className="d-flex flex-column">
                        <label>Ім'я</label>
                        <input
                            type="text"
                            className={`${errors.fname ? myRegister['error-input'] : ''}`}
                            placeholder={`Введіть своє ім'я`}
                            {...register('fname', { required: `Ім'я є обов'язковим полем` })}
                        />
                    </div>
                    {errors.fname && <div className={`${myRegister['error-style']}`}>{errors.fname.message}</div>}
                    <div className="d-flex flex-column">
                        <label>Прізвище</label>
                        <input
                            type="text"
                            className={`${errors.fname ? myRegister['error-input'] : ''}`}
                            placeholder={`Введіть своє прізвище`}
                            {...register('lname', { required: `Прізвище є обов'язковим полем` })}
                        />
                    </div>
                    {errors.lname && <div className={`${myRegister['error-style']}`}>{errors.lname.message}</div>}
                    <div className="d-flex flex-column">
                        <label>Ім'я по батькові</label>
                        <input
                            type="text"
                            className={`${errors.fname ? myRegister['error-input'] : ''}`}
                            placeholder={`Введіть своє ім'я по батькові`}
                            {...register('patronimic', { required: `Ім'я по батькові є обов'язковим` })}
                        />
                    </div>
                    {errors.patronimic && <div className={`${myRegister['error-style']}`}>{errors.patronimic.message}</div>}
                    <div className="d-flex flex-column">
                        <label>Адреса</label>
                        <input
                            type="text"
                            className={`${errors.fname ? myRegister['error-input'] : ''}`}
                            placeholder={`Введіть свою адресу`}
                            {...register('address', { required: `Адреса є обов'язковим полем` })}
                        />
                    </div>
                    {errors.address && <div className={`${myRegister['error-style']}`}>{errors.address.message}</div>}
                    <div className="d-flex flex-column">
                        <label>Пошта</label>
                        <input
                            type="text"
                            className={`${errors.email ? myRegister['error-input'] : ''}`}
                            placeholder='Введіть свою пошту'
                            {...register('email', { required: `Пошта є обов'язковим полем`, pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, message: "Некоректний формат пошти" } })}
                        />
                    </div>
                    {errors.email && <div className={`${myRegister['error-style']}`}>{errors.email.message}</div>}
                    <div className="d-flex flex-column">
                        <label>Пароль</label>
                        <input
                            type="password"
                            className={`${errors.password ? myRegister['error-input'] : ''}`}
                            placeholder='Введіть свій пароль'
                            {...register('password', { required: `Пароль є обов'язковим полем`, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, message: "Пароль повинен містити не менше 8 символів, 1 цифру, 1 велику літеру" } })}
                        />
                        {errors.password && <div className={`${myRegister['error-style']}`}>{errors.password.message}</div>}

                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <button type="submit" className='btn btn-primary'>Зареєструватись</button>
                        <Link to={'/sign-in'}>Увійти в кабінет</Link>
                        <Link to={'/'}>На головну</Link>
                    </div>

                    {error && <div className={`${myRegister.error}`}>{error}</div>}
                </div>



            </form >
        </div >
    )
}