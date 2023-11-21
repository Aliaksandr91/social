import {getAuthUserDataTC} from "./auth-reducer";
import {AppDispatch} from "./redux-store";


export type initialStateType = {
    initialized:boolean
}

const initialState: initialStateType = {
    initialized:false
}

type ActionsTypes = ReturnType<typeof initializedSuccessAC>

export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':

            return {
                ...state,
                initialized:true
            }
        default:
            return state
    }
}

export const initializedSuccessAC = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}


export const initializeAppTC = () => (dispatch:AppDispatch)=>{
    dispatch(getAuthUserDataTC()).then(() => {
        dispatch(initializedSuccessAC())
    })
};