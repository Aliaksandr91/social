import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsProps} from "../../index";

export const Profile = (props:MyPostsProps) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}