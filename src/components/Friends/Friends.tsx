import React from "react";
import {FriendType, initialStateType} from "../../redux/friendsReducer";
import s from './Friends.module.css'

type FriendsPropsType = {
    friendsPage: initialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFriends: (friends: Array<FriendType>) => void
}

export const Friends: React.FC<FriendsPropsType> = ({friendsPage, follow, unfollow, setFriends}) => {

    if(friendsPage.friends.length === 0) {
        setFriends([
            {
                id: 1, photoUrl: 'https://s3.amazonaws.com/paxful/avatar/2019/05/60098620c27c08a70f55fdd3efb38faf.jpg?v=1593613146',
                follow: true, nickname: 'Sophia Pang', status: "Software Engineer",
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2, photoUrl: 'https://framacolibri.org/user_avatar/framacolibri.org/rigelk/200/942_1.png',
                follow: true, nickname: 'Jonathon Thompson', status: "Creative Director",
                location: {country: 'Poland', city: 'Warsaw'}
            },
            {
                id: 3, photoUrl: 'https://sun6-23.userapi.com/s/v1/if1/59XuAdI4oWeF2pEhr5dIBJgGLezW7WvamrHqSTe2DzYRPihgcAg7n0Gso_5YGOZBqdTul46s.jpg?size=200x200&quality=96&crop=1080,178,704,704&ava=1',
                follow: false, nickname: 'Brian Walton', status: "Developer",
                location: {country: 'Canada', city: 'Ottawa'}
            },
            {
                id: 4, photoUrl: 'https://sun1-97.userapi.com/s/v1/ig2/Hz89U9iY6tyh310FrZfSt7S27oiWPGU8vuqpKQbQO5BavVIcSbzkInTkZhvR-vQffYUabPIpE2KsMQxPZ1mmN0c8.jpg?size=200x0&quality=96&crop=2,2,495,495&ava=1',
                follow: false, nickname: 'Olivia Steward', status: "Fashion Designer",
                location: {country: 'Spain', city: 'Madrid'}
            },
        ])
    }



    const followHandler = (fId: number, followStatus: boolean) => {
        followStatus ? unfollow(fId) : follow(fId)
    }

    return (
        <div>
            {friendsPage.friends.map(f => <div key={f.id} className={s.friendsItem}>
                <span className={s.generalBlock}>
                    <div>
                        <img src={f.photoUrl} className={s.avatar}/>
                    </div>

                    <span className={s.info}>
                        <div className={s.name}>{f.nickname}</div>
                        <div>{f.status}</div>
                    </span>

                    <span className={s.location}>
                        <div>{f.location.country}</div>
                        <div>{f.location.city}</div>

                        <button className={s.buttonFollow} onClick={()=>followHandler(f.id, f.follow)}>
                            {f.follow ? "Follow" : "Unfollow"}
                        </button>

                    </span>


                </span>

            </div>)}
        </div>
    )
}