import React from "react";
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../ validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../App";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input}
                       validate={[requiredField]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type='password'
                       component={Input} validate={[requiredField]}/>
            </div>
            <div className={s.item}>
                <Field type='checkbox' name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div className={s.item}>
                <button>Login</button>
            </div>
        </form>
        {props.error &&
        <div className={s.itemError}>
            {props.error}
        </div>}
    </>
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    isAuth: boolean
    userId: string | null
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}

const Login: React.FC<LoginPropsType> = ({isAuth, userId, loginTC}) => {
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={PATH.PROFILE + userId}/>
    }

    return (
        <div className={s.container}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


type MapStatePropsType = {
    isAuth: boolean
    userId: string | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}

export default connect(mapStateToProps, {loginTC})(Login)