import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return(
        <div>My posts
            <textarea name="" id=""></textarea>
            <button>Add post</button>
            <Post message='Hi, how are you?' likesCount={0}/>
            <Post message='Hello, my first post?' likesCount={22}/>
        </div>
    )
}