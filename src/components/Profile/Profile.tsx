import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import { MyPostsContainer } from './MyPosts/MyPostsContainer';


type ProfileProps = {
    /*store: StoreType*/
  /*  dispatch: (action: ActionsType) => void*/
}

export function Profile(props: ProfileProps) {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}