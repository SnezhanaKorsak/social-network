import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/dialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type DialogsProps = {
    dialogPage: DialogPageType;
    addMessage: (messageText: string) => void
    onMessageChange: (newMessage: string) => void
    isAuth: boolean
}

export function Dialogs(props: DialogsProps) {

    // const addMessage = () => {
    //     props.addMessage(props.dialogPage.newTextMessage)
    //     props.onMessageChange('')
    // }
    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.onMessageChange(e.currentTarget.value)
    // }

    const addNewMessage = (values: { textMessage: string }) => {
        props.addMessage(values.textMessage)
    }

    let dialogElements =
        props.dialogPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElements =
        props.dialogPage.messages.map(msg => <Message key={msg.id} message={msg.message} id={msg.id}/>);

    return (
        <>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

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

type FormDataType = {
    textMessage: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='textMessage' placeholder='Enter your message'/>
            <div>
                <button className={s.button}>Add Message</button>
            </div>
        </form>
    )

}
const AddMessageFormRedux = reduxForm<FormDataType>({form: 'addMessage'})(AddMessageForm)
