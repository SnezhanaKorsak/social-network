import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import './App.css';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsPage} from "./components/Friends/FriendsPage";
import ProfileContainer from "./components/Profile/ProfileContainer";


type AppPropsType = {
    /*store: StoreType*/
}
export const PATH = {
    PROFILE: '/profile/',
    DIALOGS: '/dialogs/',
    NEWS: '/news/',
    MUSIC: '/music/',
    SETTINGS: '/settings/',
    FIND_FRIENDS: '/findFriends/'
}


function App(props: AppPropsType) {
    /* const state = props.store.getState();*/

    return (
        <HashRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
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
                    </Switch>
                </div>

            </div>
        </HashRouter>
    );
}

export default App;