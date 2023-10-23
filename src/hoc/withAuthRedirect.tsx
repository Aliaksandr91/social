import {Navigate} from "react-router-dom";
import React from "react";
import {AppRootStateType} from "../store/redux-store";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirectComponent = (Component:any)=> {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}