import React from "react";
import PostList from "./components/PostsList";
import NewPost from "./components/NewPost";

function App() {
  return (
    <main>
      <h1>Posts</h1>
      <NewPost />
      <PostList />
    </main>
  );
}

export default App;
