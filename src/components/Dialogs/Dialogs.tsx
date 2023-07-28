import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: number
}
type PropsTypeMessage = {
    id:number
    message: string
}

type DialogsDataType = {
    id: number
    name: string
}
type MessageDataType = {
    id: number
    message: string
}
const DialogItem = (props: PropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: PropsTypeMessage) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
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