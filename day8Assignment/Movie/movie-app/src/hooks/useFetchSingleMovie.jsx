import React, { useEffect, useState } from "react";
import { helperfunction } from "../utills/helper";

const useFetchSingleMovie = (endPoint) => {
  const [movie, setMovie] = useState({});

  const fetchTrendingData = async (endPoint) => {
    const response = await helperfunction(endPoint);
    setMovie(response || {});
  };

  useEffect(() => {
    fetchTrendingData(endPoint);
  }, [endPoint]);

  return { movie };
};

export default useFetchSingleMovie;
