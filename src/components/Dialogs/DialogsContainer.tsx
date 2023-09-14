import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props:any) => {
    let state = props.store.getState().dialogsPage
    const onSendMessageClick = () => {

        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body:string)=> {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    )
}