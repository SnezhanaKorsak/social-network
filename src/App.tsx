import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionSType, StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionSType) => void
}
export const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    NEWS: '/news',
    MUSIC: '/music',
    SETTINGS: '/settings'
}


function App(props: AppPropsType) {
    const state = props.store.getState();

    return (
        <HashRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>

                        <Route path={PATH.PROFILE}
                               render={() => <Profile state={state.profilePage}
                                                      dispatch={props.dispatch}
                               />}/>
                        <Route path={PATH.DIALOGS}
                               render={() => <Dialogs state={state.dialogPage}/>}/>
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
