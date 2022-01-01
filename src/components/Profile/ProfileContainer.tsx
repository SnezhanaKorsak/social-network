import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, getUserStatusTC, ProfileType, updateStatusTC} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            debugger
           userId = this.props.userAuthId as string
        }
        this.props.getUserProfileTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render(): React.ReactNode {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
        );
    }
}

type mapStatePropsType = {
    profile: ProfileType | null
    status: string
    userAuthId: string | null
}
type mapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getUserStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userAuthId: state.auth.userId
    }

}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileTC, getUserStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)