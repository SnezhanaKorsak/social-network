import {ActionsType, DialogPageType, MessagesType} from "./store";


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState: DialogPageType = {
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
}

export const dialogReducer = (state = initialState, action: ActionsType):DialogPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesType = {
            id:  new Date().getTime(),
            message: action.messageText
        }
            state.messages.push(newMessage)

            return state
        case UPDATE_NEW_MESSAGE:
            state.newTextMessage = action.newMessage

            return state
        default:
            return state
    }
}

export const addMessageAC = (messageText: string) => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    } as const
}

export const onMessageChangeAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: newMessage
    } as const
}