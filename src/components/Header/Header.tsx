import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login, logoutTC}) => {
    return (
        <header className={s.header}>
            <img src='https://pbs.twimg.com/profile_banners/1341675636151132160/1608715543/1500x500' alt='label'/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div className={s.loginContainer}>
                        {login}
                    <button onClick={logoutTC}>Logout</button>
                </div>
                    : <NavLink to={PATH.LOGIN}>LOGIN</NavLink>
                }
            </div>
        </header>
    )
}