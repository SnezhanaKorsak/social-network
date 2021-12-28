import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/dialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, requiredField} from "../../ validators/validators";


type DialogsProps = {
    dialogPage: DialogPageType;
    addMessage: (messageText: string) => void
    onMessageChange: (newMessage: string) => void
    isAuth: boolean
}

const maxLength100 = maxLengthCreator(100)

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
            <div className={s.textarea}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
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

type FormDataType = {
    textMessage: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='textMessage'
                   placeholder='Enter your message'
                   validate={[requiredField, maxLength100]}
            />
            <div>
                <button className={s.button}>Add Message</button>
            </div>
        </form>
    )

}
const AddMessageFormRedux = reduxForm<FormDataType>({form: 'addMessage'})(AddMessageForm)
