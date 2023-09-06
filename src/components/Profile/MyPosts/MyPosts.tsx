import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export const MyPosts = (props: any) => {
    let postsElements = props.posts.map((el: PostType) => (
        <Post message={el.message} likesCount={el.likesCount}/>
    ));
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            //props.addPost(newPostElement.current.value)
            props.dispatch({type: 'ADD-POST'})
        }
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            //props.updateNewPostText(newPostElement.current.value)
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText:newPostElement.current.value })
        }

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};