
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export type PostType = {
    id: number;
    message: string;
    likeCount: number;
}
export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string
}


const initialState: ProfilePageType = {
        posts: [
            {id: 1, message: "Hi, how are you?", likeCount: 12},
            {id: 2, message: "It's my first post", likeCount: 24},
        ],
        newPostText: ''
    }

export const profileReducer = (state= initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            }
           // state.posts.push(newPost)

            return {...state, posts: [...state.posts, newPost], newPostText: ''};

        case UPDATE_NEW_POST:
            return {...state, newPostText: action.newText};

        default:
            return state;
    }
}

type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC>

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