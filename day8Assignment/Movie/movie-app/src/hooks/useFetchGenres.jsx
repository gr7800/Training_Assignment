import { useEffect, useState } from "react";
import { helperfunction } from "../utills/helper";

const useFetchGenres = () => {
  const [genres, setGenres] = useState({});

  const fetchGenres = async () => {
    const response = await helperfunction("/genre/movie/list");
    const genresObj = {};
    if (response?.genres && response.genres.length > 0) {
      response.genres.forEach((genre) => {
        genresObj[genre?.id] = genre?.name;
      });
      setGenres(genresObj);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return { genres };
};

export default useFetchGenres;
