import React from "react";
import classes from "./Post.module.css";

function Post({ author, text }) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>Author: {author}</p>
      <p className={classes.text}>Message: {text}</p>
    </div>
  );
}

export default Post;
