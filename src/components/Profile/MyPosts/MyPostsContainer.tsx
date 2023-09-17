import {addPostAC, updateNewPostTextAC} from "../../../store/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../store/redux-store";
import {Dispatch} from "redux";


type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
const mapStateToProps = (state: AppRootStateType) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)