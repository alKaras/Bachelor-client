import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import myLogin from './Login.module.scss'
import { useForm } from 'react-hook-form';
import { loginUser, selectIsAdmin, selectIsLogged } from '../../redux/slices/loginSlice';

export default function Login() {
    const isLogged = useSelector(selectIsLogged);
    const { error } = useSelector((state) => state.login);
    const isAdmin = useSelector(selectIsAdmin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm({
        defaultValues: {
            email: "al.karas@gmail.com",
            password: "Karas12345",
        },
        mode: "onChange",
    });

    const onSubmit = (values) => {
        dispatch(loginUser(values));

    }
    useEffect(() => {
        if (isLogged && isAdmin) {
            navigate('/adminCabinet')
        } else if (isLogged && !isAdmin) {
            navigate('/userCabinet')
        }
    }, [isLogged, isAdmin, navigate])





    const [passType, setPassType] = useState("password");
    const togglePass = (e) => {
        e.preventDefault();
        if (passType === "password") {
            setPassType("text");
        } else {
            setPassType("password");
        }
    }

    return (

        <div className={`${myLogin.login}`}>
            <form className={`${myLogin['login-form']}`} onSubmit={handleSubmit(onSubmit)}>
                <div className={`${myLogin['auth-form-content']}`}>
                    <h3 className={`${myLogin['auth-form-title']}`}>Вхід у кабінет</h3>
                    <div className="d-flex flex-column">
                        <label>Пошта</label>
                        <input
                            type="text"
                            className={`${errors.email ? myLogin['error-input'] : ''}`}
                            placeholder='Введіть свою пошту'
                            {...register('email', { required: `Пошта є обов'язковим полем`, pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, message: "Некоректний формат пошти" } })}
                        />
                    </div>
                    {errors.email && <div className={`${myLogin['error-style']}`}>{errors.email.message}</div>}
                    <div className="d-flex flex-column">
                        <label>Пароль</label>
                        <input
                            type={passType}
                            className={`${errors.password ? myLogin['error-input'] : ''}`}
                            placeholder='Введіть свій пароль'
                            {...register('password', { required: `Пароль є обов'язковим полем`, pattern: { value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, message: "Пароль повинен містити не менше 8 символів, 1 цифру, 1 велику літеру" } })}
                        />
                        {errors.password && <div className={`${myLogin['error-style']}`}>{errors.password.message}</div>}
                        <button onClick={togglePass} className={`${myLogin['btn-show']}`}>Показати пароль</button>

                    </div>

                    <button type="submit" className='btn btn-primary'>Увійти</button>

                    {error && <div className={`${myLogin.error}`}>{error}</div>}
                </div>



            </form >
        </div >
    )
}