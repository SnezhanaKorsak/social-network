import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";


type DialogsProps = {
    state: DialogPageType;
}

export function Dialogs(props: DialogsProps) {
    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        alert(newMessageElement.current?.value)
    }

    let dialogElements =
        props.state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements =
        props.state.messages.map(msg => <Message key={msg.id} message={msg.message} id={msg.id}/>);

    return (
        <>
            <textarea ref={newMessageElement}/>

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