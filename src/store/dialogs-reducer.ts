import {ActionsTypes} from "./store";
export type DialogType = {
    id: number
    name: string
    message:string
}
type DialogsPageType = {
    dialogs: DialogType[]
}
// const initialState: DialogsPageType = {
//     dialogs: [
//         {id: 1, name: 'Dimych'},
//         {id: 2, name: 'Andrey'},
//         {id: 3, name: 'Sveta'},
//         {id: 4, name: 'Sasha'},
//         {id: 5, name: 'Victor'},
//         {id: 6, name: 'Valera'}
//     ],
//     messages: [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'How is you'},
//         {id: 3, message: 'yo'},
//         {id: 4, message: 'aaa'},
//         {id: 5, message: 'bbbb'},
//         {id: 6, message: 'kkkk'}
//     ]
// }
const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych', message:'Hi'},
        {id: 2, name: 'Andrey', message:'How is you'},
        {id: 3, name: 'Sveta', message:'yo'},
        {id: 4, name: 'Sasha', message:'aaa'},
        {id: 5, name: 'Victor', message:'dddd'},
        {id: 6, name: 'Valera', message:'fffff'}
    ]
}
export const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE' :
            let body = action.newMessageBody
            return {
                ...state,
                dialogs: [...state.dialogs, {id: 7, name:'Guest', message: body}],

            }
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody:string) => {
    return {type: 'SEND-MESSAGE', newMessageBody} as const
}