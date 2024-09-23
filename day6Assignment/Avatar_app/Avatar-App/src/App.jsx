import "./App.css";
import { useState } from "react";
import Avatar from "./component/Avatar";
import CreateUpdateModel from "./component/overlayModel/CreateUpdateModel";

function App() {
  const [avatarlist, setAvatarList] = useState([]);
  const [modelName, setModelName] = useState("create");
  const [isOpen, setIsOpen] = useState(false);

  const handleNewAvatar = (value) => {
    setAvatarList((prev) => [...prev, value]);
    setIsOpen(false);
    console.log(avatarlist);
  };

  return (
    <div className="parrentWrapper">
      <div className="avtarWrapper">
        {avatarlist &&
          avatarlist?.length > 0 &&
          avatarlist.map((el, index) => (
            <Avatar
              key={index + 1}
              Name={el}
              setAvatarList={() => setAvatarList(avatarlist.splice(index, 1))}
            />
          ))}
        <button
          onClick={() => {
            setModelName("create");
            setIsOpen(true);
          }}
        >
          +
        </button>
        <CreateUpdateModel
          modelName={modelName}
          isOpen={isOpen}
          setAvatarList={handleNewAvatar}
          setIsOpen={(value) => setIsOpen(value)}
        />
      </div>
    </div>
  );
}

export default App;
