import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUsersProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter } from "react-router-dom";

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            })
    }

    render(): React.ReactNode {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

type mapStatePropsType = {
    profile: ProfileType | null
}
type mapDispatchPropsType = {
    setUsersProfile: (profile: ProfileType | null) => void
}
type OwnPropsType = mapStatePropsType & mapDispatchPropsType
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }

}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent)