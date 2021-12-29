import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { getUserAPIDataTC, logoutTC } from "../../redux/authReducer";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getUserAPIDataTC()
    }

    render(): React.ReactNode {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>
    }
}

type mapStatePropsType = {
    isAuth: boolean
    login: string | null
    id: string | null
}
type mapDispatchPropsType = {
    getUserAPIDataTC: () => void
    logoutTC: () => void
}
type PropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.userId
    }
}

export default connect(mapStateToProps, {getUserAPIDataTC, logoutTC})(HeaderContainer)