import React from "react";
import classes from './Post.module.css'
export const Post = () => {
    return(
            <div className={classes.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/0/93.png" alt=""/>
                new post
                <div>
                    <span>like</span>
                </div>
            </div>
    )
}