import React from 'react';
import {addPostAC, onPostChangeAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: (message: string) => void
    updateNewPost: (newText: string) => void
}

const mapStatePropsType = (state: AppStateType): MapStatePropsType =>  {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (message: string) => {
            dispatch(addPostAC(message))
            dispatch(onPostChangeAC(''))
        },
        updateNewPost: (newText: string) => {
            dispatch(onPostChangeAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStatePropsType, mapDispatchToProps)(MyPosts)