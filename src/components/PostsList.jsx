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
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet</h2>
          <p>Start adding posts...</p>
        </div>
      )}
    </>
  );
};

export default PostList;
