import React from "react";
import bookflip2 from "../assets/images/booksection2.svg";

const Section2Home = () => {
  return (
    <div className="flex flex-col py-[2.5rem] px-5 font-sansation">
      <div className="flex justify-center items-center">
        <h3 className="text-center text-[3.438rem] max-w-[31.563rem]">
          reMarkable at a glance
        </h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full h-full max-w-[71.5rem]">
          <img src={bookflip2} alt="bookflip2" className="w-full h-full" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        <div
          className="relative w-full"
          style={{
            maxWidth: "895px",
            maxHeight: "504px",
            paddingBottom: "56.25%",
          }}
        >
          <iframe
            width="895"
            height="504"
            src="https://www.youtube.com/embed/SWY_bwFMxro"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Section2Home;
