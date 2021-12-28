import { Dispatch } from "redux";
import {AuthAPI} from "../api/Api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

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
            return {...state, ...action.payload, isAuth: action.payload.isAuth}

        default:
            return state
    }

}

type ActionType = ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {userId, email, login, isAuth}
    } as const
}
export const getUserAPIDataTC = () => {
    return (dispatch: Dispatch<ActionType>) => {
        AuthAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const loginTC = (): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        AuthAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getUserAPIDataTC())
                }
            })
    }
}


export const logoutTC = () => (dispatch: Dispatch<ActionType>) => {
    AuthAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}