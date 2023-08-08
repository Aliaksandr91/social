export type PostData = {
    id: number;
    message: string;
    likesCount: number;
}

export type MyPostsProps = {
    postData: PostData[];
}

export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}

export type StateType = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
    postData: PostData[]
}
export let state: StateType = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is you'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'aaa'},
        {id: 5, message: 'bbbb'},
        {id: 6, message: 'kkkk'}
    ],
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello, my first post?', likesCount: 11}
    ]
}

export const addPost = (postMessage:any)=> {
    let newPost = {id: 5, message: postMessage, likesCount: 0}
    state.postData.push(newPost)
    // return (
    //     {...state, postData: [...state.postData, newPost]}
    // )

}