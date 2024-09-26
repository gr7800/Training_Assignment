import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const SearchModal = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
      onClose();
    }
  };

  useEffect(() => {
    setSearch(currentPath?.split("/search/")[1]);
  }, [currentPath]);

  return (
    <div
      className={`fixed w-full top-[72px] left-0 flex justify-center items-start transition-transform duration-300 ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white shadow-lg w-full flex">
        <input
          className="px-5 w-full py-3 text-black text-[20px] focus:outline-none focus:border-transparent"
          type="text"
          placeholder="Search for a movie or tv show..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <span
          onClick={onClose}
          className="px-4 py-3 text-black rounded flex flex-col justify-center"
        >
          <i className="fa-solid fa-xmark cursor-pointer"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchModal;
