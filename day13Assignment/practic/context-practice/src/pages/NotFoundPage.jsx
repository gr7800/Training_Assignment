import React from "react";
import notfound from "../assets/notfound.avif"

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img
        src={notfound}
        alt="404 not found!"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default NotFoundPage;
