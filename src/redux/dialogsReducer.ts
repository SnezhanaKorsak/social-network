
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export type DialogType = {
    id: number;
    name: string;
}
export type MessageType = {
    id: number;
    message: string;
}
export type DialogPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newTextMessage: string
}

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

export const dialogReducer = (state = initialState, action: ActionType):DialogPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
            id:  new Date().getTime(),
            message: action.messageText
        }
            return {...state, messages: [...state.messages, newMessage], newTextMessage: ''}

        case UPDATE_NEW_MESSAGE:
           // state.newTextMessage = action.newMessage
            return {...state, newTextMessage: action.newMessage}

        default:
            return state
    }
}

type ActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof onMessageChangeAC>

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