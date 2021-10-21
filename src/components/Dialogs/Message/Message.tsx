import React from "react";
import s from "./Message.module.css"

type DialogMessageProps = {
    message: string;
    id: number;
}

export function Message(props: DialogMessageProps) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

