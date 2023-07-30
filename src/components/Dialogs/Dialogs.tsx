import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessageDataType} from "../../index";

export const Dialogs = (props:any) => {



let dialogsElements = props.dialogsData.map((el:DialogsDataType)=> <DialogItem name={el.name} id={el.id}/>);
let messageElements = props.messageData.map((el:MessageDataType)=> <Message message={el.message} id={el.id}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}