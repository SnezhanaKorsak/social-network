import React from "react";
import s from "./Friends.module.css";
import userPhoto from "../../assets/images/avatarnotfound.jpg";
import {initialStateType} from "../../redux/friendsReducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../App";
import {deleteFriend, followUser} from "../../api/Api";

type FriendsPropsType = {
    friendsPage: initialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}

export const Friends = (
    {
        friendsPage,
        follow,
        unfollow,
        followingProgress,
        followingInProgress
    }: FriendsPropsType) => {

    const followHandler = (fId: number, followStatus: boolean) => {
        console.log(typeof fId)
        followStatus
            ? deleteFriend(fId).then(data => {
                if (data.resultCode === 0) unfollow(fId)
                followingProgress(false, fId)
            })

            : followUser(fId).then(data => {
                if (data.resultCode === 0) follow(fId)
                followingProgress(false, fId)
            })
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
                                    followingProgress(true, f.id)
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
