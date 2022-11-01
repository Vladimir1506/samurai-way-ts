import React from "react";
import classes from "./Post.module.css";

const Post = () => {
    return (
        <div className={classes.item}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src='https://www.illumination.com/wp-content/uploads/2020/02/stuart-1.png' alt='avatar'/>
            Post 2
        </div>
    )
}
export default Post