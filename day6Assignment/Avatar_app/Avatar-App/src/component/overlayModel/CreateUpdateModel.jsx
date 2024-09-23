/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CreateUpdateModel.css";
const CreateUpdateModel = ({ modelName, isOpen, setIsOpen, setAvatarList }) => {
  let [inputValue, setInputValue] = useState();
  return (
    <div className="modelParent">
      {isOpen &&
        (modelName === "create" ? (
          <div className="userNameModel" id="userModel">
            <input
              type="text"
              name="user"
              value={inputValue}
              placeholder="Enter User Name"
              id="username"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div>
              <button
                className="modelbutton"
                id="cancel"
                onClick={() => setIsOpen(!isOpen)}
              >
                Cancel
              </button>
              <button
                className="modelbutton"
                id="adduser"
                onClick={() => {
                  setAvatarList(inputValue);
                  setInputValue("");
                }}
              >
                Add User
              </button>
            </div>
          </div>
        ) : (
          <div className="userNameModel" id="userDeleteModel">
            <div className="confirmationBox" id="confirmationBoxText"></div>
            <div>
              <button className="modelbutton" id="cancelDelete">
                No
              </button>
              <button className="modelbutton" id="confirmDelete">
                Yes
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CreateUpdateModel;
