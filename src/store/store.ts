import {addPostAC, deletePostAC, profileReducer, setStatusAC, setUsersProfileAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: number | string;
    message: string;
    likesCount: number;
}

export type ProfilePageType = {
    posts: PostType[];
    profile?: any
    status?: string
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type SidebarType = {}

export type ActionsTypes = AddPostActionsType
    | SendMessageActionsType
    | setUsersProfileActionsType
    | setStatusActionsType
    | deletePostActionsType
export type AddPostActionsType = ReturnType<typeof addPostAC>
export type SendMessageActionsType = ReturnType<typeof sendMessageAC>
export type setUsersProfileActionsType = ReturnType<typeof setUsersProfileAC>
export type setStatusActionsType = ReturnType<typeof setStatusAC>
export type deletePostActionsType = ReturnType<typeof deletePostAC>

