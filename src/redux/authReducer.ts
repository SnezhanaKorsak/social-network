import {Dispatch} from "redux";
import {AuthAPI} from "../api/Api";

export type initialStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: initialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }

}

type ActionType = ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: string, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {userId, email, login}
    } as const
}
export const getUserAPIDataTC = () => {
    return (dispatch: Dispatch<ActionType>) => {
        AuthAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}
