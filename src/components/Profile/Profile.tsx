import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionSType, ProfilePageType} from "../../redux/state";


type ProfileProps = {
    state: ProfilePageType;
    dispatch: (action: ActionSType) => void
}

export function Profile(props: ProfileProps) {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     message={props.state.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}