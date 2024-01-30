import React from "react";
import classes from './Post.module.css'

type PropsType = {
    message: string,
    likesCount: number
}
export const Post = (props: PropsType) => {

    return (
        <div className={classes.item}>
            <div className={classes.description}>
                <img src="../../../../assets/images/user.png" alt=""/>
                {props.message}
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}