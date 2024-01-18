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
                        ? <div>{props.login} - <button className={'btn'}  onClick={props.logout}>LogOut</button></div>
                        : <NavLink className={'btn'} to={'/login'}>LogIn</NavLink>
                }

            </div>
        </header>
    )
}