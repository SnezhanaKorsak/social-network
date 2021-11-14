import {addMessageAC, DialogPageType, onMessageChangeAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

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
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: (messageText: string) => void
    onMessageChange: (newMessage: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (messageText: string) => {
            dispatch(addMessageAC(messageText))
        },
        onMessageChange: (newMessage: string) => {
            dispatch(onMessageChangeAC(newMessage))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)