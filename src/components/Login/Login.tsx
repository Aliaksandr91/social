import {Field, reduxForm} from "redux-form";
type formDataType ={
    login:string
    password:string
    rememberMe:boolean
}
export const Login = () => {
    const onSubmit = (formData:any) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const LoginForm = (props:any) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
        <div><Field placeholder={'Password'} name={'password'} component={'input'}/></div>
        <div><Field component={'input'} name={'rememberMe'} type="checkbox"/>remember Me</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)