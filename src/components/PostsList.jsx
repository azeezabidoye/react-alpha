import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

const PostList = ({ onPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  function handleAddPost(postData) {
    setPosts((existing) => [postData, ...existing]);
  }
  return (
    <>
      {onPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={handleAddPost} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} text={post.body} />
        ))}
      </ul>
    </>
  );
};

export default PostList;
