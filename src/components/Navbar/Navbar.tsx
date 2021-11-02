import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";

export function Navbar () {

    return (
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={PATH.PROFILE} activeClassName={s.active}>Profile</NavLink>
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
                    <NavLink to={PATH.SETTINGS} activeClassName={s.active}>Settings</NavLink>
                </div>
            </nav>

    )
}