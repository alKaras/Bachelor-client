import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import myLogin from './Login.module.scss'
export default function Login() {
    const [eye, seteye] = useState(true);
    const [passtype, setPasstype] = useState("password");

    const Eye = () => {
        if (passtype === "password") {
            setPasstype("text");
            seteye(false);
        } else {
            setPasstype("password");
            seteye(true);
        }
    }
    return (

        <div className={`${myLogin.login}`}>
            <form action="" className={`${myLogin['login-form']}`}>
                <div className={`${myLogin['auth-form-content']}`}>
                    <h3 className={`${myLogin['auth-form-title']}`}>Увійти у кабінет</h3>
                    <div className="form-group mt-2">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-2"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className={` ${myLogin['input-pass']}  mt-4`}>
                        {/* <label>Password</label> */}
                        <input
                            type={passtype}
                            className={`${myLogin['']} mt-2`}
                            placeholder="Enter password"
                        />
                        <i className={`fa ${eye ? myLogin["fa-eye-slash"] : myLogin["fa-eye"]}`} onClick={Eye}></i>
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-3">
                        <Link to={'/forgot-pass'}>Забули пароль?</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}