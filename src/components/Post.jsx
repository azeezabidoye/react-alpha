import React from "react";

function Post({ author, text }) {
  return (
    <div>
      <p style={{ color: "yellow" }}>Author: {author}</p>
      <p>Message: {text}</p>
    </div>
  );
}

export default Post;
