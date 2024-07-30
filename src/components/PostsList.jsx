import { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  // function handleAddPost(postData) {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existing) => [postData, ...existing]);
  // }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No posts yet</h2>
          <p>Start adding posts...</p>
        </div>
      )}
      {isFetching && <div>Loading posts...</div>}
    </>
  );
};

export default PostList;
