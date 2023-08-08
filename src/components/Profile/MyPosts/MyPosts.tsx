import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import { Post } from "./Post/Post";
import {MyPostsProps, PostData} from "../../../redux/state";

export const MyPosts = (props:MyPostsProps) => {
    let postsElements = props.postData.map((el: PostData) => (
        <Post message={el.message} likesCount={el.likesCount} />
    ));
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
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