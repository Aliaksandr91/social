import {addPostAC} from "../../../store/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../store/redux-store";
import {Dispatch} from "redux";


type mapDispatchToPropsType = {
    addPost: (newPostText:string) => void
}
const mapStateToProps = (state: AppRootStateType) => {

    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)