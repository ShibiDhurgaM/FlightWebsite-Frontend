import React from "react";
import "./Modal.css"; 

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
