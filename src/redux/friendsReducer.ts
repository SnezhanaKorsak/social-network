export  type LocationType = {
    country: string
    city: string
}
export type PhotosType = {
    small: string
    large: string
}
export type FriendType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
export type initialStateType = {
    friends: Array<FriendType>
    pageSize: number
    totalCount: number
    currentPage: number
}


const initialState: initialStateType = {
    friends: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1
}

export const friendsReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, friends: state.friends.map(f => f.id === action.userId ? {...f, followed: true} : f)};

        case "UNFOLLOW":
            return {...state, friends: state.friends.map(f => f.id === action.userId ? {...f, followed: false} : f)};

        case "SET-FRIENDS":
            return {...state, friends: action.friends}

        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.page}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.totalCount}

        default:
            return state
    }

}

type ActionType = ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setFriendsAC> |
    ReturnType<typeof setCurrentPageAC>|
    ReturnType<typeof setTotalCountAC>

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export const setFriendsAC = (friends: Array<FriendType>) => {
    return {
        type: "SET-FRIENDS",
        friends
    } as const
}
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