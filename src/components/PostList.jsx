import React from "react";
import Post from "./Post";

const PostList = () => {
  return (
    <div>
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
