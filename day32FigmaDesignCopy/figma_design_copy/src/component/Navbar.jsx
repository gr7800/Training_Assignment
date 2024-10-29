import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between md:justify-evenly py-[15px] font-sansation text-[#000000] shadow-lg px-4 md:px-0">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="max-w-[120px] md:max-w-[165px]" />
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-[60px] py-4 md:top-0 left-0 md:left-auto w-full md:w-auto md:flex items-center flex-col md:flex-row bg-white md:bg-transparent shadow-md md:shadow-none z-10 md:z-auto gap-4 text-sm md:static`}
      >
        <select className="border-none bg-transparent outline-none max-w-[142px]">
          <option value="about_remarkable">About Remarkable</option>
          <option value="watch_the_video">Watch the Video</option>
          <option value="breading_on_remarkable">Breading on Remarkable</option>
          <option value="a_note_taking_system">A note taking system</option>
          <option value="remarkable_vs_cheer_tablets">
            Remarkable vs cheer tablets
          </option>
          <option value="accessires">Accessories</option>
          <option value="remarkable_for_business">
            Remarkable for business
          </option>
        </select>
        <span>Shop</span>
        <span>For business</span>
        <select className="border-none bg-transparent outline-none">
          <option value="faq & support">FAQ & Support</option>
        </select>
        <select className="border-none bg-transparent outline-none max-w-[55px]">
          <option value="more">More</option>
          <option value="belong">Belong</option>
          <option value="room_to_think">Room to think</option>
          <option value="my_remarkable">My Remarkable</option>
          <option value="about">About</option>
        </select>
      </div>
      <div className="hidden md:flex items-center justify-center px-5 py-2 max-w-[130px] rounded-full bg-[#CB7428] text-base text-[#fff] gap-2">
        <FaCartPlus />
        <span>Buy Now</span>
      </div>
    </div>
  );
};

export default Navbar;
