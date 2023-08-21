import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";


export const Profile = (props:any) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePageData.posts}
                newPostText={props.profilePageData.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}