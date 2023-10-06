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
}
const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
export const unFollowAC = (userId: number) => {
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
type ActionsTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
