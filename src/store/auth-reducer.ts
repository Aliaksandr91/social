import {Dispatch} from "redux";
import {authAPI} from "../api";
import {stopSubmit} from "redux-form";


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

type ActionsTypes = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof stopSubmit>;

export const authReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'auth/SET-AUTH-USER-DATA':

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
        type: 'auth/SET-AUTH-USER-DATA',
        payload: {id, email, login, isAuth}
    } as const
}

type ThunkDispatch = Dispatch<ActionsTypes>

export const getAuthUserDataTC = () => {
    return async (dispatch: ThunkDispatch) => {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: ThunkDispatch) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            const {id, email, login} = response.data.data;
            dispatch(setAuthUserDataAC(id, email, login, true));
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}
export const logoutTC = () => {
    return async (dispatch: ThunkDispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    }
}