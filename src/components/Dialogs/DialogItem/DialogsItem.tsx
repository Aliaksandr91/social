import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: number
    message:string
}

export const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    console.log(props)
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <div className={classes.name}><NavLink to={path}>{props.name}</NavLink></div>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}
