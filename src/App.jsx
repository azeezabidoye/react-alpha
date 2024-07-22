import { React, useState } from "react";
import PostList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function handleHideModal() {
    setModalIsVisible(false);
  }

  function handleShowModal() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader />
      <main>
        <h1>Posts</h1>
        <PostList onPosting={modalIsVisible} />
      </main>
    </>
  );
}

export default App;
