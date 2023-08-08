export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

export type ProfilePageType = {
    posts: PostType[];
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

type Sidebar = {}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Sidebar
}


export let state: RootStateType = {
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
        ],
    },
    sidebar:{}
}

export const addPost = (postMessage:any)=> {
    let newPost = {id: 5, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
    // return (
    //     {...state, postData: [...state.postData, newPost]}
    // )

}