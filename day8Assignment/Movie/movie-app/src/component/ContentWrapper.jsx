import React, { useEffect, useState } from "react";

// linear-gradient(98.37deg, #f89e00 .99%, #da2f68 100%)

const ContentWrapper = ({title,firstTab,secondTab}) => {
    const [activeTab, setActiveTab] = useState(firstTab);

    useEffect(()=>{
      setActiveTab(firstTab);
    },[firstTab])

    return (
      <div className="flex items-center justify-between mb-5 w-full max-w-6xl mx-auto px-5">
        <span className="text-2xl text-white font-semibold">{title}</span>
        <div className="bg-white rounded-full p-1">
          <div className="flex">
            <span
              className={`tabItem px-7 rounded-full cursor-pointer ${
                activeTab === firstTab
                  ? "text-white bg-gradient-to-r from-[#f89e00] to-[#da2f68]"
                  : "text-black"
              }`}
              onClick={() => setActiveTab(firstTab)}
            >
              {firstTab}
            </span>
            <span
              className={`tabItem px-7 rounded-full cursor-pointer ${
                activeTab === secondTab
                  ? "text-white bg-gradient-to-r from-[#f89e00] to-[#da2f68]"
                  : "text-black"
              }`}
              onClick={() => setActiveTab(secondTab)}
            >
              {secondTab}
            </span>
          </div>
        </div>
      </div>
    );
};

export default ContentWrapper;
