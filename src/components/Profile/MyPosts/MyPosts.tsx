import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return(
        <div>My posts
            <Post message='Hi, how are you?' likesCount={0}/>
            <Post message='Hello, my first post?' likesCount={22}/>
        </div>
    )
}