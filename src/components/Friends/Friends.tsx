import React from "react";
import s from "./Friends.module.css";
import userPhoto from "../../assets/images/avatarnotfound.jpg";
import axios from "axios";
import {FriendsPropsType} from "./FriendsContainer";


export class Friends extends React.Component<FriendsPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    currentPageHandler (page: number){
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
            })

    }

    render(): React.ReactNode {
        const followHandler = (fId: number, followStatus: boolean) => {
            followStatus ? this.props.unfollow(fId) : this.props.follow(fId)
        }

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            if(i < 8) {
                pages.push(i)
            }

        }

        return (
            <div>
                {/*<div>
                    {pages.map(p => {
                            return <span className={`${this.props.currentPage === p && s.selectedPage}`}
                            onClick={()=>this.currentPageHandler(p)}>
                                {p}</span>
                        }
                    )}
                </div>
*/}
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
