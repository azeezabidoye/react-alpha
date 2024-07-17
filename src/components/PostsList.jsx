import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostList = () => {
  return (
    <div className={classes.posts}>
      <ul>
        <li>
          {" "}
          <Post author={"Max"} text={"Be relaxed!"} />
        </li>
        <li>
          {" "}
          <Post author={"Zizzo"} text={"No more failure!"} />
        </li>
      </ul>
    </div>
  );
};

export default PostList;
