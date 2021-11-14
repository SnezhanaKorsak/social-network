import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {PATH} from "../../App";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfileTC(userId)
    }

    render(): React.ReactNode {
        if (!this.props.isAuth) return <Redirect to={PATH.LOGIN}/>
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

type mapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type mapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }

}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent)