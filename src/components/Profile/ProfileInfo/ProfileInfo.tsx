import React from "react";
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>

                <img src="https://life.fakty.com.ua/wp-content/uploads/sites/3/2022/03/27/novyj-proekt-10-620x349.png"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}