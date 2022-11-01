import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.img} src="https://img1.goodfon.ru/original/2560x1024/9/5f/minions-minony-multfilm-1676.jpg"
                     alt="Switzerland"/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>

    )
}
export default Profile