import React from "react";
import {connect} from "react-redux";
import {Friends} from "./Friends";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    FriendType,
    initialStateType,
    setCurrentPageAC,
    setFriendsAC, setTotalCountAC,
    unfollowAC
} from "../../redux/friendsReducer";
import {Dispatch} from "redux";

export type FriendsPropsType = mapStatePropsType & mapDispatchPropsType

export type mapStatePropsType = {
    friendsPage: initialStateType
    pageSize: number
    totalCount: number
    currentPage: number
}
export type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setFriends: (friends: Array<FriendType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        friendsPage: state.friendsPage,
        pageSize: state.friendsPage.pageSize,
        totalCount: state.friendsPage.totalCount,
        currentPage: state.friendsPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setFriends: (friends: Array<FriendType>) => {
            dispatch(setFriendsAC(friends))
        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
