import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return (
        <header className={classes.header}>
            <img src="https://i.pinimg.com/originals/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg" alt=""/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>LogIn</NavLink>}

            </div>
        </header>
    )
}