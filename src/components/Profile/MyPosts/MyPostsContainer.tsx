import React from 'react';
import {addPostAC, onPostChangeAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


type MyPostsContainerProps = {
   /* store: StoreType*/
}


export function MyPostsContainer(props: MyPostsContainerProps) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();

                const addPost = (message: string) => {
                    store.dispatch(addPostAC(message))
                    store.dispatch(onPostChangeAC(''))
                }
                const onPostChange = (newText: string) => {
                    store.dispatch(onPostChangeAC(newText))
                }

                return <MyPosts posts={state.profilePage.posts}
                                newPost={state.profilePage.newPostText}
                                addPost={addPost}
                                updateNewPost={onPostChange}/>
            } }

        </StoreContext.Consumer>

    )
}