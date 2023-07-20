import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: string
}
type PropsTypeMessage = {
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

const Message = (props:PropsTypeMessage) => {
  return (
      <div className={classes.message}>{props.message}</div>
  )
}
export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How is your'/>
                <Message message='Yo'/>
            </div>
        </div>
    )
}