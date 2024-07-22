import { React, useState } from "react";
import PostList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleHideModal() {
    setModalIsVisible(false);
  }

  function handleShowModal() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={handleShowModal} />
      <main>
        <h1>Posts</h1>
        <PostList onPosting={modalIsVisible} onStopPosting={handleHideModal} />
      </main>
    </>
  );
}

export default App;
