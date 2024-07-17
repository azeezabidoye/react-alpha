import React from "react";

function Post({ author, text }) {
  const styleVar = {
    color: "cyan",
  };
  return (
    <div>
      <p style={{ color: "yellow" }}>Author: {author}</p>
      <p style={styleVar}>Message: {text}</p>
    </div>
  );
}

export default Post;
