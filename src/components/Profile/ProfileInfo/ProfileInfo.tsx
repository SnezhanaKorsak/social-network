import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profileReducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/noavatar.png";


type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.cover}>
                <img
                    src='https://catherineasquithgallery.com/uploads/posts/2021-02/1612889502_62-p-krasnii-kiberpank-fon-101.jpg'
                    alt='cover'/>
            </div>
            <div className={s.contentInfo}>
                <div className={s.mainAvatar}>
                    <img src={profile.photos.small ? profile.photos.small : userPhoto}
                         alt='avatar'/>
                </div>
                <div className={s.describeProfile}>
                    <h4>Basic Information</h4>
                    <hr/>
                    <div className={s.basicBlock}>
                        <div className={`${s.basicItem} ${s.order}`}>
                            Name:<br/>
                            About me:<br/>
                            Profession:<br/>
                            Status:<br/>
                        </div>
                        <div className={s.basicItem}>
                            {profile.fullName ? profile.fullName : 'no information'}<br/>
                            {profile.aboutMe ? profile.aboutMe : 'no information'}<br/>
                            {profile.lookingForAJob ? "I'm locking for a job"
                                : profile.lookingForAJobDescription ? profile.lookingForAJobDescription
                                    : 'no information'}<br/>
                            {profile.lookingForAJobDescription ? profile.lookingForAJobDescription
                                : 'no information'}<br/>
                        </div>
                    </div>

                    <h4>Contact Information</h4>
                    <hr/>
                    <div className={s.basicBlock}>
                        <div className={`${s.basicItem} ${s.order}`}>
                            Facebook:<br/>
                            VK:<br/>
                            Instagram:<br/>
                            GitHub:<br/>
                        </div>
                        <div className={s.basicItem}>
                            {profile.contacts.facebook ? profile.contacts.facebook : 'no information'}<br/>
                            {profile.contacts.vk ? profile.contacts.vk : 'no information'}<br/>
                            {profile.contacts.instagram ? profile.contacts.instagram : 'no information'}<br/>
                            {profile.contacts.github ? profile.contacts.github : 'no information'}<br/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}