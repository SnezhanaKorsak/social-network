import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profileReducer";
type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfoMy: React.FC<ProfileInfoPropsType> = (profile ) => {
    return (
        <div>
            <div className={s.cover}>
                <img
                    src='https://catherineasquithgallery.com/uploads/posts/2021-02/1612889502_62-p-krasnii-kiberpank-fon-101.jpg'/>
            </div>
            <div className={s.contentInfo}>
                <div className={s.mainAvatar}>
                    <img src='https://telegra.ph/file/88a8f1c2805439c4c0d86.jpg'/>
                </div>
                <div className={s.describeProfile}>
                    My profile description
                </div>
            </div>


        </div>
    )
}