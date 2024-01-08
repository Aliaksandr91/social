import {getAuthUserDataTC} from "./auth-reducer";
import {AppDispatch} from "./redux-store";


export type initialStateType = {
    isInitialized: boolean
}
const initialState: initialStateType = {
    isInitialized: false
}


type ActionsTypes = ReturnType<typeof setInitializedSuccessAC>

export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS':
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return state
    }
}

export const setInitializedSuccessAC = () => ({
    type: 'SET-INITIALIZED-SUCCESS' as const,
})


// export const initializeAppTC = () => (dispatch:AppDispatch)=>{
//     dispatch(getAuthUserDataTC()).then(() => {
//         dispatch(setInitializedSuccessAC())
//     })
// };

export const initializeAppTC = () => async (dispatch:AppDispatch) => {
    await dispatch(getAuthUserDataTC())
    dispatch(setInitializedSuccessAC())
}