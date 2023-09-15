import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../store/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState()
                const addPost = () => {
                   store.dispatch(addPostAC())
                }
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                return <MyPosts
                    posts={state.profilePage.posts}
                    updateNewPostText={onPostChange}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                />
            }
        }
        </StoreContext.Consumer>

    )
};