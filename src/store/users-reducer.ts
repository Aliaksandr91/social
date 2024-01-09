import {usersAPI} from "../api";
import {Dispatch} from "redux";

export type UserType = {
    "name": string,
    "id": number,
    "photos": {
        "small": null | string,
        "large": null | string
    }
    "status": null | string,
    "followed": boolean
}
export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map((user) => {
                    return user.id === action.userId ? {...user, followed: true} : user
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state, users: state.users.map((user) => {
                    return user.id === action.userId ? {...user, followed: false} : user
                })
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...action.users]}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'TOGGLE-LOADER': {
            return {...state, isFetching: action.loading}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        }

        default:
            return state
    }
}
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export const setCurrentPageAC = (currentPage: any) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        count
    } as const
}
export const setLoaderAC = (loading: boolean) => {
    return {
        type: 'TOGGLE-LOADER',
        loading
    } as const
}
export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    } as const
}
type ActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setLoaderAC>
    | ReturnType<typeof toggleFollowingProgressAC>

type ThunkDispatch = Dispatch<ActionsTypes>

export const getUsersTC = (page: number, pageSize: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setLoaderAC(true))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(setCurrentPageAC(page))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
                dispatch(setLoaderAC(false))
            })
    }
}
export const followTC = (userId: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setLoaderAC(true))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
                dispatch(setLoaderAC(false))
            })
    }
}
export const unfollowTC = (userId: number) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setLoaderAC(true))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
                dispatch(setLoaderAC(false))
            })
    }
}