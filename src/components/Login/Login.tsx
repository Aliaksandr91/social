import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators";
type FormDataType ={
    login:string
    password:string
    rememberMe:boolean
}
export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field
            placeholder={'Login'}
            name={'login'}
            component={Input}
            validate={[requiredField]}
        /></div>
        <div><Field
            placeholder={'Password'}
            name={'password'}
            component={Input}
            validate={[requiredField]}
        /></div>
        <div><Field component={Input} name={'rememberMe'} type="checkbox"/>remember Me</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)