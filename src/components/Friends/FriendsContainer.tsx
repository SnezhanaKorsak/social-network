import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, initialStateType, unfollow} from "../../redux/friendsReducer";
import React from "react";
import {Friends} from "./Friends";
import {Preloader} from "../../common/Preloader/Preloader";


class FriendsAPIComponent extends React.Component<FriendsAPIComponentPropsType> {

    render(): React.ReactNode {
        return <div>
            {this.props.isFetching ? <Preloader/>
                : <Friends friendsPage={this.props.friendsPage}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                />}
        </div>
    }
}

export type FriendsAPIComponentPropsType = mapStatePropsType & mapDispatchPropsType

export type mapStatePropsType = {
    friendsPage: initialStateType
    isFetching: boolean
}
export type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void

}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        friendsPage: state.friendsPage,
        isFetching: state.friendsPage.isFetching
    }
}


export const FriendsContainer = connect(mapStateToProps, {follow, unfollow})(FriendsAPIComponent)
