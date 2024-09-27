/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePageMain = ({ randomImage }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleClick = () => {
    if (searchQuery.length > 0) {
      navigate(`/search/${searchQuery}`);
    }
  };

  useEffect(() => {
    setSearchQuery(currentPath?.split("/search/")[1]);
  }, [currentPath]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-white px-[3rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${randomImage})`,
          filter: "blur(30%)",
          opacity: 0.5, 
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-[#04152d] opacity-30" style={{ filter: 'blur(10px)', zIndex: -1 }} />
      <h2 className="text-[5.625rem] text-center font-bold">Welcome.</h2>
      <p className="text-[1.5rem] text-nowrap font-medium">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
      <div className="flex max-w-[70%] justify-center items-center h-12 w-full mt-[2.5rem]">
        <input
          className="w-[70%] h-[50px] px-5 py-3 rounded-l-full text-black text-[20px]"
          type="text"
          placeholder="Search for a movie or tv show..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="w-[30%] h-[3.125rem] text-[1.125rem] text-white rounded-r-full"
          style={{
            background: "linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)",
          }}
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePageMain;
