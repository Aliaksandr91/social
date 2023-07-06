import React from "react";
import classes from './Profile.module.css'
export const Profile = () => {
    return(
        <div className='content'>
            <img src="https://life.fakty.com.ua/wp-content/uploads/sites/3/2022/03/27/novyj-proekt-10-620x349.png"
                 alt=""/>
            <div><img
                src="https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/square_320_c09ebae17387b7d6eeb9fa0d42afe5ee.jpg"
                alt=""/></div>
            <div>My posts
                <div className={classes.item}>new post</div>
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    )
}