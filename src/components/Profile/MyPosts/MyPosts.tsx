import React from 'react';
import s from "./MyPost.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../ validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";


type MyPostsProps = {
    profilePage: ProfilePageType
    addPost: (message: string) => void
}

type FormDataType = {
    newPost: string
}

const maxLength100 = maxLengthCreator(100)

export const MyPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPost'} component={Textarea}
                   placeholder='Write something'
                   validate={[requiredField, maxLength100]}
            />
        </div>
        <div>
            <button className={s.button}>Add Post</button>
        </div>
    </form>
}
const MyPostReduxForm = reduxForm<FormDataType>({form: 'addMyPost'})(MyPostForm)


export function MyPosts(props: MyPostsProps) {

    // const addPost = () => {
    //     props.addPost(props.profilePage.newPostText)
    //     props.updateNewPost('')
    // }
    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateNewPost(e.currentTarget.value)
    // }

    const addNewPost = (values: { newPost: string }) => {
        props.addPost(values.newPost)
    }

    let postsElement =
        props.profilePage.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts:</h3>
                <MyPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    )
}