import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import Logo from '../../assets/images/logo.png'

export const Header = (props: any) => {
    return (
        <header className={classes.header}>
            <img src={Logo} alt=""/>
            {
                props.isAuth
                    ? <div className={classes.loginBlock}>
                        {props.login}
                        <button className={'btn'} onClick={props.logout}>LogOut</button>
                    </div>
                    : <div className={classes.loginBlock}>
                        <NavLink className={'btn'} to={'/login'}>LogIn</NavLink>
                    </div>
            }

        </header>
    )
}