import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/authReducer";
import {ProfileType, setUsersProfile} from "../../redux/profileReducer";
import {getUserAPIData} from "../../api/Api";

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        getUserAPIData().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email,login )
                }
            })
    }

    render(): React.ReactNode {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

type mapStatePropsType = {
    isAuth: boolean
    login: string | null
    id: string | null
}
type mapDispatchPropsType = {
    setAuthUserData: (userId: string, email: string, login: string) => void
    setUsersProfile: (profile: ProfileType | null) => void
}
type PropsType = mapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.userId
    }
}

export default connect(mapStateToProps, {setAuthUserData, setUsersProfile})(HeaderContainer)