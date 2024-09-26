import { useEffect, useState } from "react";
import { helperfunction } from "../utills/helper";

const useSearchHook = (initialPage = "1", initialValue = "") => {
  const [searchList, setSearchList] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [query, setQuery] = useState(initialValue);

  const fetchTrendingData = async (endPoint) => {
    const response = await helperfunction(endPoint);
    setSearchList(response?.results || []);
  };

  useEffect(() => {
    if (page && query) {
      fetchTrendingData(`/search/multi?query=${query}&page=${page}`);
    }
  }, [page, query]);

  return { searchList, page, query, setPage, setQuery };
};

export default useSearchHook;
