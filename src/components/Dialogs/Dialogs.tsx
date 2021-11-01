import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import { DialogPageType } from "../../redux/store";


type DialogsProps = {
    newTextMessage: string
    dialogPage: DialogPageType;
    addMessage: (messageText: string) => void
    onMessageChange: (newMessage: string) => void
}

export function Dialogs(props: DialogsProps) {


    const addMessage = () => {
        props.addMessage(props.newTextMessage)
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
            <textarea value={props.newTextMessage}
                      onChange={onMessageChange}
                      placeholder={'Enter your message'}/>

            <div>
                <button onClick={addMessage}>Add Message</button>
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