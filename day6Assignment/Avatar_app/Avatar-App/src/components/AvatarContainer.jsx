import React from "react";
import AvatarCard from "./AvatarCard.jsx";

const AvatarContainer = ({ userData, onOpenUserModal, onOpenDeleteModal }) => {
  return (
    <div className="userAvatarWrapper">
        {userData.map((user, index) => (
          <AvatarCard
            key={index}
            user={user}
            onDelete={() => onOpenDeleteModal(index)}
          />
        ))}
        <button className="addUserButton" onClick={onOpenUserModal}>
          +
        </button>
    </div>
  );
};

export default AvatarContainer;
