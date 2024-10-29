import React from "react";
import leftSidbook from "../assets/images/booksection1.svg";
import worldsThenest from "../assets/images/worldsThenestTablet.svg";
import videoIcons from "../assets/images/videoicons.svg";
import tomsguid from "../assets/images/tomsguide.svg";
import masble from "../assets/images/masble.svg";

import { FaCartPlus } from "react-icons/fa";

const Section1Home = () => {
  return (
    <div>
      <div className="w-full h-full bg-[#1E2A2F] px-6 py-8 md:px-[48px] lg:px-[95px] lg:py-[56px]">
        <div className="max-w-[1360px] m-auto flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="relative w-full lg:w-1/2">
            <img
              src={leftSidbook}
              alt="leftbook"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[20%] left-5 w-[35%] md:w-[25%] lg:w-[22%]">
              <img src={worldsThenest} alt="worldThenest" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div>
              <h5 className="text-4xl md:text-5xl lg:text-7xl font-sansation font-normal text-white">
                reMarkable 2
              </h5>
              <p className="text-xl md:text-2xl lg:text-3xl font-normal font-sansation text-white">
                Thenext Generation Paper Tablet
              </p>
            </div>
            <div className="flex flex-col gap-5 md:gap-[40px] lg:gap-[86px] py-5 lg:py-12">
              <p className="text-base md:text-lg font-light text-[#FFFFFF] lg:text-left">
                Replace your notebooks and printed documents with the only
                tablet that feels like paper.
              </p>
              <div className="flex items-center gap-6 lg:gap-20">
                <div className="flex items-center justify-center px-4 py-2 md:px-5 md:py-2 max-w-[130px] rounded-full bg-[#CB7428] text-base text-[#fff] gap-2 cursor-pointer">
                  <FaCartPlus />
                  <span>Buy Now</span>
                </div>
                <div className="flex gap-4">
                  <img src={videoIcons} alt="videoIcon" />
                </div>
              </div>
              <div className="flex items-center justify-center border border-white rounded-full px-3 py-2 md:px-4 md:py-3 text-white gap-2 w-fit">
                <p className="text-sm md:text-base">Scroll to learn more</p>
                <button className="border-2 border-white rounded-full w-5 h-5 md:w-6 md:h-6 text-white flex items-center justify-center">
                  {"<"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#dedddb] py-5">
        <h5 className="text-3xl font-normal text-center">
          Praised by tech’s most respected publications
        </h5>
        <div className="flex flex-col md:flex-row gap:20 md:gap-20 items-center justify-center">
          <img src={tomsguid} alt="tomsguide" />
          <img src={masble} alt="masblee" />
        </div>
      </div>
    </div>
  );
};

export default Section1Home;
