import { useEffect, useState } from "react";
import { getTmdbUrl, helperfunction } from "../utills/helper";

const useFetchMovies = (sectionType, tab) => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const fetchTrendingData = async (endPoint) => {
    const response = await helperfunction(endPoint);
    setTrendingMovies(response?.results);
  };

  useEffect(() => {
    const url = getTmdbUrl(sectionType, tab?.toLowerCase());
    fetchTrendingData(url);
  }, [sectionType, tab]);

  return { trendingMovies };
};

export default useFetchMovies;
