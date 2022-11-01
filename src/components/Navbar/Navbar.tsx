import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className={`${classes.item} ${classes.active}`}><a>Profile</a></div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className={classes.item}><a>Messages</a></div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className={classes.item}><a>News</a></div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className={classes.item}><a>Music</a></div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className={classes.item}><a>Settings</a></div>
        </nav>)
}
export default Navbar