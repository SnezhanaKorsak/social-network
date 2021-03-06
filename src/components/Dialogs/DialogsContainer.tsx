import {addMessageAC, DialogPageType} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


//здесь пример с использование Consumer
/*export function DialogsContainer(props: DialogsContainerProps) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();

                const addMessage = (messageText: string) => {
                    store.dispatch(addMessageAC(messageText))
                    store.dispatch(onMessageChangeAC(''))
                }
                const onMessageChange = (newMessage: string) => {
                    store.dispatch(onMessageChangeAC(newMessage))
                }

                return <Dialogs dialogPage={state.dialogPage}
                                addMessage={addMessage}
                                onMessageChange={onMessageChange}/>
            }}

        </StoreContext.Consumer>
    )
}*/

type MapStatePropsType = {
    dialogPage: DialogPageType
}

type MapDispatchPropsType = {
    addMessage: (messageText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText))
        },

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)