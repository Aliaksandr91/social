import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import { logoutTC} from "../../store/auth-reducer";
import {AppRootStateType} from "../../store/redux-store";

class HeaderContainer extends React.Component<any, any> {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {logout:logoutTC})(HeaderContainer)