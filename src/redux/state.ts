export type MessagesType = {
    id: number;
    message: string;
}
export type DialogsType = {
    id: number;
    name: string;
}
export type PostsType = {
    id: number;
    message: string;
    likeCount: number;
}
export type ProfilePageType = {
    posts: Array<PostsType>;
    newPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType;
    dialogPage: DialogPageType;
    sidebar: SidebarType;
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionSType) => void
}

export type ActionSType = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC>;

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCount: 12},
                {id: 2, message: "It's my first post", likeCount: 24},
            ],
            newPostText: ''
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: "Terra"},
                {id: 2, name: "Azumy"},
                {id: 3, name: "Bria"},
                {id: 4, name: "Keren"}
            ],
            messages: [
                {id: 1, message: "Hi! How are yoy?"},
                {id: 2, message: "Don't give up!"},
                {id: 3, message: "Just do it"},
                {id: 4, message: "Could you help me?"}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('Changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.postText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }
}

export const  addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const onPostChangeAC = (newText: string)=> {
    return {
        type: UPDATE_NEW_POST,
        newText: newText
    } as const
}


