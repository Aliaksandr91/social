import {Dispatch} from "redux";
import {authAPI} from "../api";


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
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: null | number, email: null | string, login: null | string, isAuth: boolean) => {
    return {
        type: 'SET_AUTH_USER_DATA',
        payload: {id, email, login, isAuth}
    } as const
}

type ThunkDispatch = Dispatch<ActionsTypes>

export const getAuthUserDataTC = () => {
    return (dispatch: ThunkDispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkDispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    const { id, email, login } = response.data.data;
                    dispatch(setAuthUserDataAC(id, email, login, true));
                }
            })
    }
}
export const logoutTC = () => {
    return (dispatch: ThunkDispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}