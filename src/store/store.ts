import {addPostAC, deletePostAC, profileReducer, setStatusAC, setUsersProfileAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    getState: () => RootStateType
    subscribe: (callBack: (state: RootStateType) => void) => void;

    //updateNewPostText: (newText: string) => void
    //addPost: () => void
    dispatch: (action: any) => void
}

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
    dialogs: DialogType[];
    messages: MessageType[]
}

export type SidebarType = {}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

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


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hello, my first post?', likesCount: 11}
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber(state: RootStateType) {
        console.log('no observer')
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)

    }

}

