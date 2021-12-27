import {Dispatch} from "redux";
import {ProfileAPI} from "../api/Api";


const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

export type PostType = {
    id: number;
    message: string;
    likeCount: number;
}
type ContactsType = {
    facebook: string
    website: string | null
    vk: string
    twitter: string
    instagram: string
    youtube: null,
    github: string
    mainLink: null
}
type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileType | null
    status: string
}


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 24},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            }

            return {...state, posts: [...state.posts, newPost]};

        // case UPDATE_NEW_POST:
        //     return {...state, newPostText: action.newText};

        case "SET-USERS-PROFILE":
            return {...state, profile: action.profile}

        case "SET-USER-STATUS":
            return {...state, status: action.status}


        default:
            return state;
    }
}

type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUsersProfile>
    | ReturnType<typeof setUserStatus>

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText
    } as const
}

// export const onPostChangeAC = (newText: string) => {
//     return {
//         type: UPDATE_NEW_POST,
//         newText
//     } as const
// }
export const setUsersProfile = (profile: ProfileType | null) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status
    } as const
}

export const getUserProfileTC = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        ProfileAPI.getUsersProfile(userId).then(data => {
            dispatch(setUsersProfile(data));
        })
    }
}
export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        ProfileAPI.getStatus(userId).then(res => {
            dispatch(setUserStatus(res.data));
        })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        ProfileAPI.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            })
    }
}