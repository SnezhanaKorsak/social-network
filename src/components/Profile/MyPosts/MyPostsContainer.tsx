import {addPostAC, ProfilePageType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: (message: string) => void
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
        },
    }
}

export const MyPostsContainer = connect(mapStatePropsType, mapDispatchToProps)(MyPosts)