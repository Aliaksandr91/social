import {ActionsTypes, DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state

        case 'SEND-MESSAGE' :
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 7, message: body})
            return state
        default:
            return state
    }
}
export const updateNewMessageBodyAC = (body: any) => {
    return {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const
}
export const sendMessageAC = () => {
    return {type: 'SEND-MESSAGE'} as const
}