/* eslint-disable react/prop-types */

const ContentWrapper = ({
  title,
  firstTab,
  secondTab,
  activeTab,
  setActiveTab,
  parentClass
}) => {
  return (
    <div className={`flex items-center justify-between mb-5 w-full max-w-6xl mx-auto px-5 ${parentClass}`}>
      <span className="text-2xl text-white font-semibold">{title}</span>
      {firstTab && secondTab && (
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
      )}
    </div>
  );
};

export default ContentWrapper;
