import React from 'react';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";
import './App.css';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    /*store: StoreType*/
}
export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings'
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

                        <Route path={PATH.PROFILE}
                               render={() => <Profile />}/>
                        <Route path={PATH.DIALOGS}
                               render={() => <DialogsContainer />}/>
                        <Route path={PATH.NEWS} render={() => <News/>}/>
                        <Route path={PATH.MUSIC} render={() => <Music/>}/>
                        <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                    </Switch>
                </div>

            </div>
        </HashRouter>
    );
}

export default App;
