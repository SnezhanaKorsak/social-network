import React from 'react';
import s from './Post.module.css';

type PostTypeProps = {
    message: string;
    id: number;
    likeCount: number;
}

export function Post(props: PostTypeProps) {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://telegra.ph/file/88a8f1c2805439c4c0d86.jpg'/>
                    {props.message}
                    <div>
                        <span>like: {props.likeCount} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}