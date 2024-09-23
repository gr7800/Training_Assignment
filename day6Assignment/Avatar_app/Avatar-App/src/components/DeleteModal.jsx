import React from "react";
import Overlay from "./Overlay.jsx";

const DeleteModal = ({ onClose, onDeleteUser, username }) => {
  return (
    <Overlay>
      <div className="modal">
        <div className="confirmationBox">
          Are you sure you want to delete {username.toUpperCase()}?
        </div>
        <div className="modalButtons">
          <button onClick={onClose}>No</button>
          <button onClick={onDeleteUser}>Yes</button>
        </div>
      </div>
    </Overlay>
  );
};

export default DeleteModal;
