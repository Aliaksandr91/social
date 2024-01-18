import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../store/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";

export const MyPosts = React.memo((props: any) => {
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
});

type FormDataType = {
    newPostText: string
}


const maxLength10 = maxLengthCreator(10)

const addNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    placeholder={'Enter your text'}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button className={'btn'}>Add post</button>
            </div>
        </form>

    )
}
const AddNewPostFormRedux = reduxForm<FormDataType>({
    form: 'profilePostForm'
})(addNewPostForm)