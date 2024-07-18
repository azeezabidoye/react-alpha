import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";

const PostList = () => {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function handleAuthorChange(e) {
    setEnteredAuthor(e.target.value);
  }
  function handleBodyChange(e) {
    setEnteredBody(e.target.value);
  }

  return (
    <>
      <NewPost
        onAuthorChange={handleAuthorChange}
        onBodyChange={handleBodyChange}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
      </ul>
    </>
  );
};

export default PostList;
