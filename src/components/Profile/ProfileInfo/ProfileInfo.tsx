import React from "react";
import classes from './ProfileInfo.module.css'
import {Loader} from "../../common/Loader/Loader";
import photo from '../../../assets/images/profile.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo = (props:any) => {
    if (!props.profile) {
        return <Loader/>
    }
    return (
        <div>
            <div>

                {/*<img src="https://life.fakty.com.ua/wp-content/uploads/sites/3/2022/03/27/novyj-proekt-10-620x349.png"*/}
                {/*     alt=""/>*/}
            </div>
            <div className={classes.descriptionBlock}>
                <img className={classes.photo} src={props.profile.photos.large ?  props.profile.photos.large : photo} alt=""/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}