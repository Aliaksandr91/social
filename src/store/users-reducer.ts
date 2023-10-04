export type userType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string,
    location: { city: string, country: string }

}
const initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://via.placeholder.com/150/24f355',
            followed: true,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://via.placeholder.com/150/f66b97',
            followed: false,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://via.placeholder.com/150/f66b97',
            followed: true,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

export const usersReducer = (state = initialState, action: ActionsTypes) => {
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
            return {...state, users: [...state.users, ...action.users]}
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
