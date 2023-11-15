import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../store/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts = (props: any) => {
    let postsElements = props.posts.map((el: PostType) => (
        <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
    ));
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
};
type FormDataType = {}
const addNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder={'Enter your text'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>

    )
}
const AddNewPostFormRedux = reduxForm<FormDataType>({
    form: 'profilePostForm'
})(addNewPostForm)