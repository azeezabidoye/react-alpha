import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostList = () => {
  return (
    <div className={classes.posts}>
      <ul>
        <Post author={"Max"} text={"Be relaxed!"} />
        <Post author={"Zizzo"} text={"No more failure!"} />
      </ul>
    </div>
  );
};

export default PostList;
