import React, {ChangeEvent} from 'react';
import s from "./MyPost.module.css";
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/store";

type MyPostsProps = {
    posts: Array<PostsType>;
    newPost: string
    addPost: (message: string) => void
    updateNewPost: (newText: string) => void
}


export function MyPosts(props: MyPostsProps) {

    const addPost = () => {
        props.addPost(props.newPost)
        props.updateNewPost('')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPost(e.currentTarget.value)
    }

    let postsElement =
        props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts:</h3>
                <div>
                    <div>
                        <textarea value={props.newPost} onChange={onPostChange}/>
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