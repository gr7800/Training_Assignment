import { useLocation } from "react-router-dom";
import ContentWrapper from "../component/ContentWrapper";
import { useEffect, useState } from "react";
import useSearchHook from "../hooks/useSearchHook";

const SearchResultPage = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const initialQuery = currentPath.split("/search/")[1] || "";
  const { searchList, setQuery, setPage } = useSearchHook("1", initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
    setPage("1");
  }, [initialQuery, setQuery, setPage]);

  console.log(searchList);

  return (
    <div className="w-full py-56">
      <ContentWrapper title={"Search results of " + initialQuery} />
    </div>
  );
};

export default SearchResultPage;
