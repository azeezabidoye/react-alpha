import React from "react";
import Post from "./components/Post";

function App() {
  return (
    <main>
      <h1>Posts</h1>
      <Post author={"Max"} text={"I will never be poor"} />
      <Post
        author={"Zizzo"}
        text={"Finish React + NextJs before Aug 1st 2024"}
      />
    </main>
  );
}

export default App;
