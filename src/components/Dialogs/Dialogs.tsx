import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Redirect} from "react-router-dom";
import {PATH} from "../../App";
import {DialogPageType} from "../../redux/dialogsReducer";



type DialogsProps = {
    dialogPage: DialogPageType;
    addMessage: (messageText: string) => void
    onMessageChange: (newMessage: string) => void
    isAuth: boolean
}

export function Dialogs(props: DialogsProps) {

    const addMessage = () => {
        props.addMessage(props.dialogPage.newTextMessage)
        props.onMessageChange('')
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }

    let dialogElements =
        props.dialogPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements =
        props.dialogPage.messages.map(msg => <Message key={msg.id} message={msg.message} id={msg.id}/>);

    return (
        <>
            <textarea value={props.dialogPage.newTextMessage}
                      onChange={onMessageChange}
                      placeholder={'Enter your message'}/>

            <div>
                <button className={s.button} onClick={addMessage}>Add Message</button>
            </div>

            <div className={s.dialogs}>

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

