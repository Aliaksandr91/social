import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api";
import {setUsersProfileAC} from "./profile-reducer";

export type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
    // isFetching: boolean
    isAuth: boolean
}

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    // isFetching: false,
    isAuth: false
}
type ActionsTypes = ReturnType<typeof setAuthUserDataAC>

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number, email: string, login: string) => {
    return {
        type: 'SET_AUTH_USER_DATA',
        data: {id, email, login}
    } as const
}

type ThunkDispatch = Dispatch<ActionsTypes>

export const getAuthUserDataTC = () => {
    return (dispatch: ThunkDispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login))
                }
            })
    }
}