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
        <PostList onPosting={modalIsVisible} onStopPosting={handleHideModal} />
      </main>
    </>
  );
}

export default App;
