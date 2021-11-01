import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


type DialogsContainerProps = {
   /* store: StoreType*/
}

export function DialogsContainer(props: DialogsContainerProps) {

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

                return <Dialogs newTextMessage={state.dialogPage.newTextMessage}
                                dialogPage={state.dialogPage}
                                addMessage={addMessage}
                                onMessageChange={onMessageChange}/>
            }}

        </StoreContext.Consumer>
    )
}