import {FriendType} from "./friendsReducer";

export type initialStateType = {
    pageLimit: number
    totalRecords: number
    pageNeighbours:  number
    currentPage: number
}


const initialState: initialStateType = {
    totalRecords: 0,
    pageLimit: 4,
    pageNeighbours: 1,
    currentPage: 5
}

export const paginationReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-TOTAL-COUNT":
            return {...state, totalRecords: action.totalCount}

        default:
            return state
    }

}

type ActionType = ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalCountAC> |
    ReturnType<typeof setFriendsAC>


export const setCurrentPageAC = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        page
    } as const
}
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount
    } as const
}
export const setFriendsAC = (friends: Array<FriendType>) => {
    return {
        type: "SET-FRIENDS",
        friends
    } as const
}