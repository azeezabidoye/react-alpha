import { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const posts = useLoaderData();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function handleAddPost(postData) {
    fetch("http://localhost:8080/posts/newpos", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existing) => [postData, ...existing]);
  }

  return (
    <>
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
