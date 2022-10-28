import React from "react";
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://img1.goodfon.ru/original/2560x1024/9/5f/minions-minony-multfilm-1676.jpg"
                     alt="Switzerland"/>
            </div>
            <div>ava+description</div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div className={classes.item}>Post 1</div>
                    <div className={classes.item}>Post 2</div>
                    <div className={classes.item}>Post 3</div>
                </div>
            </div>
        </div>

    )
}
export default Profile