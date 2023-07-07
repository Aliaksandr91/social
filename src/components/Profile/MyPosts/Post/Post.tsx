import React from "react";
import classes from './Post.module.css'
type PropsType ={
    message: string
}
export const Post = (props:PropsType) => {

    return(
            <div className={classes.item}>
                <img src="https://cdn-icons-png.flaticon.com/512/0/93.png" alt=""/>
                {props.message}
                <div>
                    <span>like</span>
                </div>
            </div>
    )
}