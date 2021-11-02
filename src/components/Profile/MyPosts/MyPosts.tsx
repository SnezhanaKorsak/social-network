import React, {ChangeEvent} from 'react';
import s from "./MyPost.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/profileReducer";


type MyPostsProps = {
    profilePage: ProfilePageType
    addPost: (message: string) => void
    updateNewPost: (newText: string) => void
}


export function MyPosts(props: MyPostsProps) {

    const addPost = () => {
        props.addPost(props.profilePage.newPostText)
        props.updateNewPost('')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPost(e.currentTarget.value)
    }

    let postsElement =
        props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts:</h3>
                <div>
                    <div>
                        <textarea value={props.profilePage.newPostText} onChange={onPostChange}/>
                    </div>
                    <div>
                        <button className={s.button} onClick={addPost}>Add Post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    )
}