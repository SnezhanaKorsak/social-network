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
    isFetching: boolean
    followingInProgress: Array<number>
}


const initialState: initialStateType = {
    friends: [],
    isFetching: false,
    followingInProgress: []
}

export const friendsReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, friends: state.friends.map(f => f.id === action.userId ? {...f, followed: true} : f)};

        case "UNFOLLOW":
            return {...state, friends: state.friends.map(f => f.id === action.userId ? {...f, followed: false} : f)};

        case "SET-FRIENDS":
            return {...state, friends: action.friends}

        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}

        case "FOLLOWING-PROGRESS":
            return action.isFetching
                ? {...state, followingInProgress: [...state.followingInProgress, action.userId]}
                : {...state, followingInProgress: state.followingInProgress.filter(id => id!== action.userId)}

        default:
            return state
    }

}

type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setFriends>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof followingProgress>


export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setFriends = (friends: Array<FriendType>) => {
    return {
        type: "SET-FRIENDS",
        friends
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}
export const followingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "FOLLOWING-PROGRESS",
        isFetching, userId
    } as const
}