import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import Logo from '../../assets/images/logo.png'
export const Header = (props: any) => {
    return (
        <header className={classes.header}>
            <img src={Logo} alt=""/>
            <div className={classes.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                        : <NavLink to={'/login'}>LogIn</NavLink>
                }

            </div>
        </header>
    )
}