import React from 'react';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import './App.css';
import {FriendsPage} from "./components/Friends/FriendsPage";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import {Preloader} from "./common/Preloader/Preloader";
import NavbarContainer from "./components/Navbar/NavbarContainer";


export const PATH = {
    PROFILE: '/profile/',
    DIALOGS: '/dialogs/',
    NEWS: '/news/',
    MUSIC: '/music/',
    SETTINGS: '/settings/',
    FIND_FRIENDS: '/findFriends/',
    LOGIN: '/login/',
}

type AppPropsType = {
    initialized: boolean
    initializeApp: () => void
}

class App extends React.Component<AppPropsType> {
    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <HashRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <div className='content'>
                        <Switch>
                            <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>

                            <Route path={PATH.PROFILE + ':userId'}
                                   render={() => <ProfileContainer/>}/>
                            <Route path={PATH.DIALOGS}
                                   render={() => <DialogsContainer/>}/>
                            <Route path={PATH.NEWS} render={() => <News/>}/>
                            <Route path={PATH.MUSIC} render={() => <Music/>}/>
                            <Route path={PATH.FIND_FRIENDS} render={() => <FriendsPage/>}/>
                            <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                            <Route path={PATH.LOGIN} render={() => <Login/>}/>
                        </Switch>
                    </div>

                </div>
            </HashRouter>
        );
    }
}

type mapStatePropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}


export default connect(mapStateToProps, {initializeApp})(App)
