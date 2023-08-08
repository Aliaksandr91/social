import React, {useRef} from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessageDataType} from "../../redux/state";

export const Dialogs = (props:any) => {

    let newMessageElement = useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
        if (newMessageElement.current !== null) {
            alert(newMessageElement.current.value)
        }
    }

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
           <div>
               <textarea ref={newMessageElement}></textarea>
           </div>
            <div><button onClick={addMessage}>Add message</button></div>
        </div>
    )
}