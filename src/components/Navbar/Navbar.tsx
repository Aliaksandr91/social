import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink
                    to="/profile"
                    className={navData => navData.isActive ? classes.active : ''}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs"
                         className={navData => navData.isActive ? classes.active : ''}
                >Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users"
                         className={navData => navData.isActive ? classes.active : ''}
                >Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news"
                         className={navData => navData.isActive ? classes.active : ''}
                >News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music"
                         className={navData => navData.isActive ? classes.active : ''}
                >Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings"
                         className={navData => navData.isActive ? classes.active : ''}
                >Settings</NavLink>
            </div>
        </nav>
    )
}