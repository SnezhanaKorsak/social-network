import React from 'react';
import s from './Profile.module.css';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import {ProfileType} from "../../redux/profileReducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
   profile: ProfileType | null
}

export const Profile: React.FC<ProfilePropsType> = ({profile}) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
}