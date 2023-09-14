import React, {ChangeEvent, useRef} from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";

export const Dialogs = (props:any) => {
    let state = props.store.getState().dialogsPage
    // let newMessageElement = useRef<HTMLTextAreaElement>(null)
    const onSendMessageClick = () => {
        // if (newMessageElement.current !== null) {
        //     alert(newMessageElement.current.value)
        // }
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

let dialogsElements = state.dialogs.map((el:DialogType)=> <DialogItem name={el.name} id={el.id}/>);
let messagesElements = state.messages.map((el:MessageType)=> <Message message={el.message} id={el.id}/>);
let newMessageBody =state.newMessageBody
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
           <div>
               <textarea
                   // ref={newMessageElement}
                   value={newMessageBody}
                   placeholder='Enter your message'
                   onChange={onNewMessageChange}
               ></textarea>
           </div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
    )
}