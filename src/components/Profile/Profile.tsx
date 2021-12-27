import React from 'react';
import s from './Profile.module.css';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from "../../redux/profileReducer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = ({
                                                        profile,
                                                        status,
                                                        updateStatus
                                                    }) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}