import React, { useState } from 'react'
import myLogin from './Login.module.scss'
import { Link } from 'react-router-dom'
export default function Login() {

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
            <form className={`${myLogin['login-form']}`} >
                <div className={`${myLogin['auth-form-content']}`}>
                    <h3 className={`${myLogin['auth-form-title']}`}>Вхід у кабінет</h3>
                    <div className="d-flex flex-column">
                        <label>Пошта</label>
                        <input
                            type="text"
                            className=''
                            placeholder='Введіть свою пошту'

                        />
                    </div>
                    <div className="d-flex flex-column">
                        <label>Пароль</label>
                        <input
                            type={passType}
                            className=''
                            placeholder='Введіть свій пароль'

                        />
                        <button onClick={togglePass} className={`${myLogin['btn-show']}`}>Показати пароль</button>

                    </div>

                    <button type="submit" className='btn btn-primary'>Увійти</button>


                </div>
            </form>
        </div>
    )
}