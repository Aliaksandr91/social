import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {createField, Input} from "../common/FormControls/FormControls";
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
const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({loginTC, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Navigate replace to="/profile"/>;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error,}) => {
    return <form onSubmit={handleSubmit}>
        {createField('Email', 'email', Input, [requiredField])}
        {createField('Password', 'password', Input, [requiredField], {type:'password'})}
        {createField(undefined, "rememberMe", Input, [], { type: "checkbox" }, "remember me")}
        {error && <div className={styles.formSummaryError}>
            {error}
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

type MapStatePropsType = {
    isAuth: boolean;
};
type MapDispatchPropsType = {
    loginTC: (
        email: string,
        password: string,
        rememberMe: boolean
    ) => void;
};
