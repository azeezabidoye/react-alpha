import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={handleNavigate} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
