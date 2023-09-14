import {ActionsTypes, ProfilePageType} from "./store";


const initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello, my first post?', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    debugger
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 5, message: state.newPostText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case 'UPDATE-NEW-POST-TEXT' :
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}