import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <header className="fixed w-full flex justify-between px-10 py-4 bg-[#020c1b] z-10">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex gap-5 text-white justify-center items-center text-center">
        <Link to="/movies">Movies</Link>
        <Link to="/tvshow">Tv Shows</Link>
      </div>
    </header>
  );
};

export default Navbar;
