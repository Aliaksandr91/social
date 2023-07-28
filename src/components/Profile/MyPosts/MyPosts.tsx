import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

type PostDataTypes = {
    id: number
    message: string
    likesCount:number
}
export const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello, my first post?', likesCount: 11}
    ]
    let postsElements = postData.map(el=><Post message={el.message} likesCount={el.likesCount}/>)
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
}