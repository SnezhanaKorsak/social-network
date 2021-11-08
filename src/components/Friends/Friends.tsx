import React from "react";
import {FriendType, initialStateType} from "../../redux/friendsReducer";
import s from "./Friends.module.css";
import userPhoto from "../../assets/images/avatarnotfound.jpg";
import axios from "axios";

type FriendsPropsType = {
    friendsPage: initialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFriends: (friends: Array<FriendType>) => void
}

export class Friends extends React.Component<FriendsPropsType> {

    constructor(props:FriendsPropsType) {

        super(props);
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setFriends(response.data.items)
            })
    }

    render(): React.ReactNode {
        const followHandler = (fId: number, followStatus: boolean) => {
            followStatus ? this.props.unfollow(fId) : this.props.follow(fId)
        }

        return (
            <div>
                {this.props.friendsPage.friends.map(f => <div key={f.id} className={s.friendsItem}>
                <span className={s.generalBlock}>
                    <div>
                        <img className={s.avatar} alt={'userAvatar'}
                             src={f.photos.small != null ? f.photos.small : userPhoto}/>
                    </div>

                    <span className={s.info}>
                        <div className={s.name}>{f.name}</div>
                        <div>{f.status}</div>
                    </span>

                    <span className={s.location}>
                        <div>{'f.location.country'}</div>
                        <div>{'f.location.city'}</div>

                        <button className={s.buttonFollow} onClick={() => followHandler(f.id, f.followed)}>
                            {f.followed ? "Follow" : "Unfollow"}
                        </button>

                    </span>


                </span>

                </div>)}
            </div>
        )
    }
}
