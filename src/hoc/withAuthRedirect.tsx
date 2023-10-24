import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppRootStateType} from "../store/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth:boolean
}

const mapStateToPropsForRedirect = (state: AppRootStateType):MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function withAuthRedirectComponent<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T & {}}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}