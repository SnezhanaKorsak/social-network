import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followTC, initialStateType, unfollowTC} from "../../redux/friendsReducer";
import React from "react";
import {Friends} from "./Friends";
import {Preloader} from "../../common/Preloader/Preloader";


class FriendsAPIComponent extends React.Component<FriendsAPIComponentPropsType> {

    render(): React.ReactNode {
        return <div>
            {this.props.isFetching ? <Preloader/>
                : <Friends friendsPage={this.props.friendsPage}
                           followingInProgress = {this.props.followingInProgress}
                           followTC={this.props.followTC}
                           unfollowTC={this.props.unfollowTC}

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
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void

}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        friendsPage: state.friendsPage,
        isFetching: state.friendsPage.isFetching,
        followingInProgress: state.friendsPage.followingInProgress,
    }
}


export const FriendsContainer = connect(mapStateToProps,
    {followTC, unfollowTC})(FriendsAPIComponent)
