import React from "react";
import s from "./Friends.module.css";
import userPhoto from "../../assets/images/avatarnotfound.jpg";
import {initialStateType} from "../../redux/friendsReducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";


type FriendsPropsType = {
    friendsPage: initialStateType
    followingInProgress: Array<number>
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export const Friends = (
    {
        friendsPage,
        followingInProgress,
        followTC,
        unfollowTC,
    }: FriendsPropsType) => {

    const followHandler = (fId: number, followStatus: boolean) => {
        followStatus
            ? unfollowTC(fId)
            : followTC(fId)
    }

    return (
        <>
            {/*<div>
                    {pages.map(p => {
                            return <span className={`${this.props.currentPage === p && s.selectedPage}`}
                            onClick={()=>this.currentPageHandler(p)}>
                                {p}</span>
                        }
                    )}
                </div>
*/}
            {friendsPage.friends.map(f => <div key={f.id} className={s.friendsItem}>
                <span className={s.generalBlock}>
                    <div>
                        <NavLink to={PATH.PROFILE + f.id}>
                            <img className={s.avatar} alt={'userAvatar'}
                                 src={f.photos.small != null ? f.photos.small : userPhoto}/>
                        </NavLink>
                    </div>

                    <span className={s.info}>
                        <div className={s.name}>{f.name}</div>
                        <div>{f.status}</div>
                    </span>

                    <span className={s.location}>
                        <div>{'f.location.country'}</div>
                        <div>{'f.location.city'}</div>

                        <button className={s.buttonFollow}
                                onClick={() => {
                                    followHandler(f.id, f.followed)
                                }}
                                disabled={followingInProgress.some(id => id === f.id)}>
                            {f.followed ? "Follow" : "Unfollow"}
                        </button>

                    </span>

                </span>

            </div>)}
        </>
    )

}
