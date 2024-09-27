import React, { useEffect, useState } from "react";
import { helperfunction } from "../utills/helper";

const useFetchVideo = (endPoint) => {
  const [key, setKey] = useState("");

  const fetchTrendingData = async (endPoint) => {
    const response = await helperfunction(endPoint);
    setKey(response?.results[0]?.key|| "dIpNpMfGxK8");
  };

  useEffect(() => {
    fetchTrendingData(endPoint);
  }, [endPoint]);

  return { key };
};

export default useFetchVideo;
