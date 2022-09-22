import React from "react";
import "./Modal.css"

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want To Continue?</h1>
        </div>
        <div className="body">
          <p>
            The next page is awesome! You should move forward, you will enjoy
          </p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
