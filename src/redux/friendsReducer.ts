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
}


const initialState: initialStateType = {
    friends: [],
    isFetching: false
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

        default:
            return state
    }

}

type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setFriends>
    | ReturnType<typeof toggleIsFetching>


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
