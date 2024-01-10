import React, {useRef} from "react";
import classes from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../store/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators";
import {Textarea} from "../../common/FormControls/FormControls";

export class MyPosts extends React.Component<any> {
    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<{}>): boolean {
        return nextProps !== this.props || nextState !== this.state
    }

    render() {
        let postsElements = this.props.posts.map((el: PostType) => (
            <Post key={el.id} message={el.message} likesCount={el.likesCount}/>
        ));
        let newPostElement = useRef<HTMLTextAreaElement>(null)
        const onAddPost = (values: any) => {
            this.props.addPost(values.newPostText)
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
    }
}

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
                <button>Add post</button>
            </div>
        </form>

    )
}
const AddNewPostFormRedux = reduxForm<FormDataType>({
    form: 'profilePostForm'
})(addNewPostForm)