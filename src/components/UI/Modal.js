import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = ({ onCloseModal }) => {
  return <div className={classes.backdrop} onClick={onCloseModal}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = ({ onCloseModal, children }) => {
  return (
    <>
      {createPortal(
        <BackDrop onCloseModal={onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
