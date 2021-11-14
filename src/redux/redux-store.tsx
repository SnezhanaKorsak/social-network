import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {friendsReducer} from "./friendsReducer";
import {paginationReducer} from "./paginationReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sideBarReducer,
    friendsPage: friendsReducer,
    pagination: paginationReducer,
    auth: authReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))




