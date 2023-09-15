import {combineReducers, createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})
export const store = createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store