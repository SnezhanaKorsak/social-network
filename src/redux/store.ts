import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

type MessagesType = {
    id: number;
    message: string;
}
type DialogsType = {
    id: number;
    name: string;
}
type PostsType = {
    id: number;
    message: string;
    likeCount: number;
}
type ProfilePageType = {
    posts: Array<PostsType>;
    newPostText: string
}
type DialogPageType = {
    dialogs: Array<DialogsType>;
    messages: Array<MessagesType>;
    newTextMessage: string
}
type SidebarType = {}
type RootStateType = {
    profilePage: ProfilePageType;
    dialogPage: DialogPageType;
    sidebar: SidebarType;
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    /*dispatch: (action: ActionType) => void*/
}

type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof onPostChangeAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof onMessageChangeAC>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

 const store: StoreType = {
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
            ],
            newTextMessage: '',
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
    }/*,

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.sidebar = sideBarReducer(this._state.sidebar, action)

        this._callSubscriber()
    }*/
}


const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

const onPostChangeAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST,
        newText: newText
    } as const
}

const addMessageAC = (messageText: string) => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    } as const
}

const onMessageChangeAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: newMessage
    } as const
}
