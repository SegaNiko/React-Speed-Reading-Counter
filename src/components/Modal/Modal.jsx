import React from "react";
import { useSelector } from "react-redux";

import "./index.scss";

const Modal = ({ modal, setModal }) => {
  const result = useSelector((state) => state);
  console.log(result);

  const handleClose = () => {
    setModal(!modal);
  };
  return (
    <div className="modal__wrap">
      <div
        className={modal ? "modal__background" : "modal__hidden-background"}
        onClick={handleClose}
      ></div>
      <div className={modal ? "modal" : "modal__hidden"}>
        <h2 className="modal__title">Your result</h2>
        <div className="modal__close" onClick={handleClose}>
          ×
        </div>
        <div className="modal__body">
          <p className="modal__text">
            Reading Speed: {result.readingSpeed} (words in Min)
          </p>
          <p className="modal__text">
            Hours to read a book: {result.hoursToReadBook}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
