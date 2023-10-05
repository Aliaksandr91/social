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
    [key: string]: Array<UserType>
}
const initialState:UsersStateType = {
    users: []
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersStateType=> {
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
type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
