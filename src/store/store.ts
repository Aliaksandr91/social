import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
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
    id: number;
    message: string;
    likesCount: number;
}

export type ProfilePageType = {
    posts: PostType[];
    newPostText: string
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
    newMessageBody: string
}

export type SidebarType = {}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes = AddPostActionsType | UpdateNewPostTextActionsType | UpdateNewMessageBodyACActionsType | sendMessageACActionsType
export type AddPostActionsType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextActionsType = ReturnType<typeof updateNewPostTextAC>
export type UpdateNewMessageBodyACActionsType = ReturnType<typeof updateNewMessageBodyAC>
export type sendMessageACActionsType = ReturnType<typeof sendMessageAC>


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Hello, my first post?', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
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
            ],
            newMessageBody: ''
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
    // addPost() {
    //     const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state)
    //     // return (
    //     //     {...this._state, postData: [...this._state.postData, newPost]}
    //     // )
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber(this._state)
    //     // return (
    //     //     {...this._state, newPostText: [...this._state.profilePage, newText]}
    //     // )
    // },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)

    }

}

