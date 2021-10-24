import {ActionsType, DialogPageType, MessagesType} from "./state";


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const dialogReducer = (state: DialogPageType, action: ActionsType):DialogPageType => {
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