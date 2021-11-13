import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, followingProgress, initialStateType, unfollow} from "../../redux/friendsReducer";
import React from "react";
import {Friends} from "./Friends";
import {Preloader} from "../../common/Preloader/Preloader";


class FriendsAPIComponent extends React.Component<FriendsAPIComponentPropsType> {

    render(): React.ReactNode {
        return <div>
            {this.props.isFetching ? <Preloader/>
                : <Friends friendsPage={this.props.friendsPage}
                           followingInProgress = {this.props.followingInProgress}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           followingProgress={this.props.followingProgress}

                />}
        </div>
    }
}

export type FriendsAPIComponentPropsType = mapStatePropsType & mapDispatchPropsType

export type mapStatePropsType = {
    friendsPage: initialStateType
    isFetching: boolean
    followingInProgress: Array<number>
}
export type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingProgress: (isFetching: boolean, userId: number) => void

}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        friendsPage: state.friendsPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress,
    }
}


export const FriendsContainer = connect(mapStateToProps,
    {follow, unfollow, followingProgress})(FriendsAPIComponent)
