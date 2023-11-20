import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input} from "../common/FormControls/FormControls";
import {requiredField} from "../../utils/validators";
import {connect} from "react-redux";
import {loginTC} from "../../store/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../store/redux-store";
import styles from './../common/FormControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const Login = (props: any) => {
    console.log(props)
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate replace to="/profile"/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field
            placeholder={'Email'}
            name={'email'}
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
        {props.error && <div className={styles.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginTC})(Login)