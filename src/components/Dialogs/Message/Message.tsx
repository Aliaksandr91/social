import React from "react";
import classes from "./../Dialogs.module.css";



type PropsTypeMessage = {
    id:number
    message: string
}

export const Message = (props: PropsTypeMessage) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}
