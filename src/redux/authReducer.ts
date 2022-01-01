import {AuthAPI} from "../api/Api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

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
            return {...state, ...action.payload}

        default:
            return state
    }

}

type ActionType = ReturnType<typeof setAuthUserData> | StopSubmitActionType


export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {userId, email, login, isAuth}
    } as const
}
export const getUserAPIDataTC = (): ThunkAction<any, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
       return  AuthAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
type StopSubmitActionType = ReturnType<typeof stopSubmit>


export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
        AuthAPI.logIn(email, password, rememberMe)
            .then(res => {
                if(res.data.resultCode === 0) {
                    dispatch(getUserAPIDataTC())
                } else {
                    let message = res.data.messages.length > 0
                        ? res.data.messages[0]
                        : 'ERROR: invalid email or password'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}


export const logoutTC = (): ThunkAction<void, AppStateType, unknown, ActionType> => (dispatch) => {
    AuthAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}