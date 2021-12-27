import React from "react";
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <div className={s.item}>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div className={s.item}>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div className={s.item}>
                    <Field type='checkbox' name={'rememberMe'} component={'input'}/> remember me
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