import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react";
import s from './FormsControl.module.css'
import {WrappedFieldMetaProps} from "redux-form";

type DefaultInputPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type FormsControlType = {
    input: DefaultInputPropsType
    meta: WrappedFieldMetaProps
    FormType: string
}

export const FormControl: React.FC<FormsControlType> = ({
                                                         input,
                                                         meta,
                                                         FormType,
                                                         ...props
                                                     }) => {
    const error = meta.touched && meta.error
    const finalInputName = `${s.formControl} ${error ? s.error : ''}`

    return (
        <div className={finalInputName}>
            {error && <div className={s.errorMessage}>{meta.error}</div>}
            <FormType {...input} {...props}/>
        </div>
    )
}

export const Textarea: React.FC<FormsControlType> = ({...props}) => {
    return <FormControl {...props} FormType="textarea" />
}

export const Input: React.FC<FormsControlType> = ({...props}) => {
    return <FormControl {...props} FormType="input" />
}