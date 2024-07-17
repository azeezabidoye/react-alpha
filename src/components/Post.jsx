import React from "react";
import classes from "./Post.module.css";

function Post({ author, text }) {
  const styleVar = {
    color: "cyan",
  };
  return (
    <div>
      <p style={{ color: "yellow" }}>Author: {author}</p>
      <p className={classes.message}>Message: {text}</p>
    </div>
  );
}

export default Post;
