import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {Pagination} from "./Pagination";
import {FriendType} from "../../../redux/friendsReducer";
import {setCurrentPageAC, setFriendsAC, setTotalCountAC} from "../../../redux/paginationReducer";

export type PaginationPropsType = mapStatePropsType & mapDispatchPropsType

export type mapStatePropsType = {
    pageLimit: number
    totalRecords: number
    pageNeighbours:  number
    currentPage: number
}
export type mapDispatchPropsType = {
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    setFriends: (friends: Array<FriendType>) => void
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        pageLimit: state.pagination.pageLimit,
        totalRecords: state.pagination.totalRecords,
        pageNeighbours: state.pagination.pageNeighbours,
        currentPage: state.friendsPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        setFriends: (friends: Array<FriendType>) => {
            dispatch(setFriendsAC(friends))
        },
    }
}

export const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination)
