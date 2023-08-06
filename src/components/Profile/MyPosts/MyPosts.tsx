import React from "react";
import classes from './MyPosts.module.css';
import { Post } from "./Post/Post";
import {MyPostsProps, PostData} from "../../../redux/state";

export const MyPosts = (props:MyPostsProps) => {
    let postsElements = props.postData.map((el: PostData) => (
        <Post message={el.message} likesCount={el.likesCount} />
    ));
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea name="" id=""></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};