import {ActionsTypes, DialogsPageType} from "./store";

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'aaa'},
        {id: 5, message: 'bbbb'},
        {id: 6, message: 'kkkk'}
    ]
}
export const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {

        case 'SEND-MESSAGE' :
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody:string) => {
    return {type: 'SEND-MESSAGE', newMessageBody} as const
}