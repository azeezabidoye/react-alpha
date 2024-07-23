import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

const PostList = ({ onPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  function handleAddPost(postData) {
    setPosts([postData, ...posts]);
  }
  return (
    <>
      {onPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={"Alawiye"} text={"React is awesome"} />
      </ul>
    </>
  );
};

export default PostList;
