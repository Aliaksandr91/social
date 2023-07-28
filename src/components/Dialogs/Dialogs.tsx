import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";

type DialogsDataType = {
    id: number
    name: string
}
type MessageDataType = {
    id: number
    message: string
}

export const Dialogs = () => {

    let dialogsData:DialogsDataType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]
    let messageData:MessageDataType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'aaa'},
        {id: 5, message: 'bbbb'},
        {id: 6, message: 'kkkk'}
    ]

let dialogsElements = dialogsData.map(el=> <DialogItem name={el.name} id={el.id}/>);
let messageElements = messageData.map(el=> <Message message={el.message} id={el.id}/>);
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