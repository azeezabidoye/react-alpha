import React from "react";
import "./post.css";

function Post({ author, text }) {
  const styleVar = {
    color: "cyan",
  };
  return (
    <div>
      <p style={{ color: "yellow" }}>Author: {author}</p>
      <p className="message">Message: {text}</p>
    </div>
  );
}

export default Post;
