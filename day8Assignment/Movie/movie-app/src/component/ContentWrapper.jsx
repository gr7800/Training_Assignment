/* eslint-disable react/prop-types */

import FilterModel from "./FilterModel";

const ContentWrapper = ({
  title,
  firstTab,
  secondTab,
  activeTab,
  setActiveTab,
  parentClass,
  genresList,
  sortList,
  sortingvalue,
  handleSortSelect,
  genrevalue,
  handleGenreSelect
}) => {
  return (
    <div className={`flex items-center justify-between mb-5 w-full mx-auto px-5 ${parentClass}`}>
      <span className="text-2xl text-white font-semibold">{title}</span>
      {firstTab && secondTab && (
        <div className="bg-white rounded-full p-1">
          <div className="flex">
            <span
              className={`tabItem px-7 rounded-full cursor-pointer ${activeTab === firstTab
                ? "text-white bg-gradient-to-r from-[#f89e00] to-[#da2f68]"
                : "text-black"
                }`}
              onClick={() => setActiveTab(firstTab)}
            >
              {firstTab}
            </span>
            <span
              className={`tabItem px-7 rounded-full cursor-pointer ${activeTab === secondTab
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
      {genresList && sortList && <div className="w-[50%] flex justify-end items-center gap-5">
        <FilterModel name={genrevalue} list={genresList} handleSelect={handleGenreSelect} />
        <FilterModel name={sortingvalue} list={sortList} handleSelect={handleSortSelect} />
      </div>}
    </div>
  );
};

export default ContentWrapper;
