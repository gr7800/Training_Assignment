import { useState } from "react";
import AvatarContainer from "./components/AvatarContainer.jsx";
import UserModal from "./components/UserModal.jsx";
import DeleteModal from "./components/DeleteModal.jsx";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState(["Guddu", "Tiwari", "Subham", "Jay"]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const addUser = (username) => {
    if (username) {
      setUserData([...userData, username]);
    }
    setIsUserModalOpen(false);
  };

  const confirmDeleteUser = () => {
    setUserData(userData.filter((_, index) => index !== userToDelete));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="parent">
      <h1>User Avatar Generator</h1>
      <AvatarContainer
        userData={userData}
        onOpenUserModal={() => setIsUserModalOpen(true)}
        onOpenDeleteModal={(index) => {
          setUserToDelete(index);
          setIsDeleteModalOpen(true);
        }}
      />
      {isUserModalOpen && (
        <UserModal
          onClose={() => setIsUserModalOpen(false)}
          onAddUser={addUser}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteModal
          onClose={() => setIsDeleteModalOpen(false)}
          onDeleteUser={confirmDeleteUser}
          username={userData[userToDelete]}
        />
      )}
    </div>
  );
};

export default App;
