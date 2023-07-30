import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props:any) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}