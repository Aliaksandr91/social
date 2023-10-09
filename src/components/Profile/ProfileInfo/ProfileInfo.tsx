import React from "react";
import classes from './ProfileInfo.module.css'
import {Loader} from "../../Loader/Loader";

export const ProfileInfo = (props:any) => {
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div>
            <div>

                <img src="https://life.fakty.com.ua/wp-content/uploads/sites/3/2022/03/27/novyj-proekt-10-620x349.png"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}