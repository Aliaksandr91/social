import React, {ChangeEvent, useRef} from "react";
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../store/store";

export const Dialogs = (props:any) => {
    let state = props.dialogsPage
    // let newMessageElement = useRef<HTMLTextAreaElement>(null)
    const onSendMessageClick = () => {
        // if (newMessageElement.current !== null) {
        //     alert(newMessageElement.current.value)
        // }
        props.sendMessage()
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=> {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

let dialogsElements = state.dialogs.map((el:DialogType)=> <DialogItem key={el.id} name={el.name} id={el.id}/>);
let messagesElements = state.messages.map((el:MessageType)=> <Message key={el.id} message={el.message} id={el.id}/>);
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