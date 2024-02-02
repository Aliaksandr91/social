import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {newsReducer} from "./news-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    news: newsReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    any
>;
// определить автоматически тип всего объекта состояния

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store