import React from "react";
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../ validators/validators";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'}
                           component={Input} autocomplete="off"
                           validate={[requiredField]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type='password' autocomplete="off"
                           component={Input} validate={[requiredField]}/>
                </div>
                <div className={s.item}>
                    <Field type='checkbox' name={'rememberMe'} component={'input'}/> Remember me
                </div>
                <div className={s.item}>
                    <button>Login</button>
                </div>
            </form>
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.container}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}