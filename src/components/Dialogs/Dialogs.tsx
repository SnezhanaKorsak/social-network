import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsType, DialogPageType} from "../../redux/state";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogsReducer";


type DialogsProps = {
    state: DialogPageType;
    message: string
    dispatch: (action: ActionsType) => void
}

export function Dialogs(props: DialogsProps) {

    const addMessage = () => {
        props.dispatch(addMessageAC(props.message))
        props.dispatch(onMessageChangeAC(''))
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onMessageChangeAC(e.currentTarget.value))
    }

    let dialogElements =
        props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements =
        props.state.messages.map(msg => <Message key={msg.id} message={msg.message} id={msg.id}/>);

    return (
        <>
            <textarea value={props.message} onChange={onMessageChange}/>

            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>

            <div className={s.dialogs}>

                {/*<textarea></textarea>
                <button className={s.button}>add message</button>*/}
                <div className={s.dialogsItem}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>

            </div>
        </>
    )
}