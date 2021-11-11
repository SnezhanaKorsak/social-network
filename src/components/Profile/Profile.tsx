import React from 'react';
import s from './Profile.module.css';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import {ProfileType} from "../../redux/profileReducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


type ProfilePropType = {
   profile: ProfileType | null
}

export const Profile: React.FC<ProfilePropType> = ({profile, ...restProps}) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
}