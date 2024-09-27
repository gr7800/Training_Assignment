import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import SearchModal from "./SearchModel";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full flex justify-between px-10 py-4 bg-[#020c1b] z-10">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-5 text-white justify-center items-center text-center">
          <Link to="/movie">Movies</Link>
          <Link to="/tv">Tv Shows</Link>
          <span onClick={() => setIsModalOpen((prev) => !prev)}>
            <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
          </span>
        </div>
      </header>
      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
