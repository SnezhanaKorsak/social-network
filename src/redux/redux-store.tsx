import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogsReducer";
import {sideBarReducer} from "./sideBarReducer";
import {StoreType} from "./store";


/*export type ReducersType = ReturnType<typeof reducers>*/

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sideBarReducer
})

export let store: StoreType = createStore(reducers)



