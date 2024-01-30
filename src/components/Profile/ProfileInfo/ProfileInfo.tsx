import React from "react";
import classes from './ProfileInfo.module.css'
import {Loader} from "../../common/Loader/Loader";
import photo from '../../../assets/images/profile.png'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo: React.FC<any> = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Loader/>
    }
    return (
        <div className={classes.descriptionBlock}>
            <div className={classes.backGround}>
                <img className={classes.photo} src={profile.photos.large ? profile.photos.large : photo} alt=""/>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}