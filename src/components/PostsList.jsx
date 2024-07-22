import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

const PostList = ({ onPosting, onStopPosting }) => {
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
      {onPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onAuthorChange={handleAuthorChange}
            onBodyChange={handleBodyChange}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
      </ul>
    </>
  );
};

export default PostList;
