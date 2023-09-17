import {addPostAC, updateNewPostTextAC} from "../../../store/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../store/redux-store";

const mapStateToProps = (state:AppRootStateType)=> {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:any)=> {
    return {
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextAC(text))
        },
        addPost:()=>{
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)