import {ActionsTypes, ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api";


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Hello, my first post?', likesCount: 11}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {id: 5, message: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };


        case 'SET-USER-PROFILE' :
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS' :
            return {
                ...state,
                status: action.status
            }
        case 'DELETE-POST' :
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.id)
            }
        default:
            return state
    }
}
export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText
    } as const
}

export const setUsersProfileAC = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}
export const deletePostAC = (id: string | number) => {
    return {
        type: 'DELETE-POST',
        id
    } as const
}

type ThunkDispatch = Dispatch<ActionsTypes>

export const getUsersProfileTC = (userId: number) => {
    return (dispatch: ThunkDispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfileAC(response.data))
            })

    }
}
export const getStatusTC = (userId: number) => {
    return (dispatch: ThunkDispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusAC(response.data))
            })

    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: ThunkDispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }

            })

    }
}