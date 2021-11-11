import React from "react";
import s from './Preloader.module.css'
import loadingGif from "../../assets/images/rings.svg";

export const Preloader = () => {
    return <div>
        <img className={s.loading} src={loadingGif} alt='loading'/>
    </div>
}