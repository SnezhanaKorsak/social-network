import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

type PropsType = {
    userId: string | null
}

export function Navbar (props: PropsType) {

    return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={PATH.PROFILE + props.userId} activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.DIALOGS} activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.NEWS} activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.MUSIC} activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.FIND_FRIENDS} activeClassName={s.active}>Friends</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.SETTINGS} activeClassName={s.active}>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={PATH.LOGIN} activeClassName={s.active}>Login</NavLink>
                </div>
            </nav>

    )
}