import React, { useEffect, useState } from "react";
import { helperfunction } from "../utills/helper";

const useFetchMoviesTvWithFilter = (page, with_genres, sort_by,contentName) => {
  const [moviesList, setMovies] = useState([]);

  const fetchTrendingData = async () => {
    const response = await helperfunction(
      `/discover/${contentName||"movie"}?page=${page||1}&with_genres=${with_genres || ""}&sort_by=${
        sort_by || ""
      }`
    );
    setMovies(response?.results);
  };

  useEffect(() => {
    fetchTrendingData();
  }, [with_genres, sort_by,page]);

  useEffect(() => {});

  return { moviesList };
};

export default useFetchMoviesTvWithFilter;
