import React, {ChangeEvent} from 'react';
import s from "./MyPost.module.css";
import {Post} from "./Post/Post";
import {ActionsType, PostsType} from "../../../redux/state";
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";


type MyPostsProps = {
    posts: Array<PostsType>;
    message: string
    dispatch: (action: ActionsType) => void
}


export function MyPosts(props: MyPostsProps) {

    const addPost = () => {
        props.dispatch(addPostAC(props.message))
        props.dispatch(onPostChangeAC(''))
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(onPostChangeAC(e.currentTarget.value))
    }

    let postsElement =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts:</h3>
                <div>
                    <div>
                        <textarea value={props.message} onChange={onPostChange}/>
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