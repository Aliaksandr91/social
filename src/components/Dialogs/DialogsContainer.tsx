import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../store/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage
            const onSendMessageClick = () => {

                store.dispatch(sendMessageAC())
            }
            const onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyAC(body))
            }
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />
        }
    }

    </StoreContext.Consumer>
}