import React from 'react'
import { Link } from 'react-router-dom';
import myLogin from './Login.module.scss'
export default function Login() {
    return (

        <div className={`${myLogin.login}`}>
            <form action="" className={`${myLogin['login-form']}`}>
                <div className={`${myLogin['Auth-form-content']}`}>
                    <h3 className="Auth-form-title">Увійти у кабінет</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        <Link to={'/forgot-pass'}>Забули пароль?</Link>
                    </p>
                </div>
            </form>
        </div>

    )
}