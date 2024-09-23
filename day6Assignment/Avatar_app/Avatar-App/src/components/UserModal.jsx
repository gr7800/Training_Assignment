import React, { useState } from "react";
import Overlay from "./Overlay.jsx";

const UserModal = ({ onClose, onAddUser }) => {
  const [username, setUsername] = useState("");

  const handleAddUser = () => {
    onAddUser(username);
    setUsername("");
  };

  return (
    <Overlay>
      <div className="modal">
        <input
          type="text"
          placeholder="Enter User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="modalButtons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleAddUser}>Add User</button>
        </div>
      </div>
    </Overlay>
  );
};

export default UserModal;
