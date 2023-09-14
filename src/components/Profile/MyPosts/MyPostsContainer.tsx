import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {stat} from "fs";


export const MyPostsContainer = (props: any) => {
    debugger
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    return (
        <MyPosts
            posts={state.profilePage.posts}
            updateNewPostText={onPostChange}
            newPostText={state.profilePage.newPostText}
            addPost={addPost}
        />
    )
};