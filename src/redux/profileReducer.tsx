import {ActionsType, PostsType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const initialState: ProfilePageType = {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 12},
            {id: 2, message: "It's my first post", likeCount: 24},
        ],
        newPostText: ''
    }

export const profileReducer = (state= initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            }
            state.posts.push(newPost)

            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText

            return state;
        default:
            return state;
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const onPostChangeAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST,
        newText: newText
    } as const
}