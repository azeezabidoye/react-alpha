import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost({ onAddPost }) {
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  function handleAuthorChange(e) {
    setEnteredAuthor(e.target.value);
  }
  function handleBodyChange(e) {
    setEnteredBody(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={handleAuthorChange} />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={handleBodyChange} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
