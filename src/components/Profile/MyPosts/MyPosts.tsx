import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
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
                <Post message='Hi, how are you?' likesCount={0}/>
                <Post message='Hello, my first post?' likesCount={22}/>
            </div>
        </div>
    )
}