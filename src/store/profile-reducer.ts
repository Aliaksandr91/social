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
        case 'profile/ADD-POST':
            const newPost = {id: 5, message: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };


        case 'profile/SET-USER-PROFILE' :
            return {
                ...state,
                profile: action.profile
            }
        case 'profile/SET-STATUS' :
            return {
                ...state,
                status: action.status
            }
        case 'profile/DELETE-POST' :
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
        type: 'profile/ADD-POST',
        newPostText
    } as const
}

export const setUsersProfileAC = (profile: any) => {
    return {
        type: 'profile/SET-USER-PROFILE',
        profile
    } as const
}
export const setStatusAC = (status: string) => {
    return {
        type: 'profile/SET-STATUS',
        status
    } as const
}
export const deletePostAC = (id: string | number) => {
    return {
        type: 'profile/DELETE-POST',
        id
    } as const
}

type ThunkDispatch = Dispatch<ActionsTypes>

export const getUsersProfileTC = (userId: number) => {
    return async (dispatch: ThunkDispatch) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUsersProfileAC(response.data))

    }
}
export const getStatusTC = (userId: number) => {
    return async (dispatch: ThunkDispatch) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(response.data))

    }
}
export const updateStatusTC = (status: string) => {
    return async (dispatch: ThunkDispatch) => {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    }
}