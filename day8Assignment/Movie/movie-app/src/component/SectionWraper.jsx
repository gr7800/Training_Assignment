import { useEffect, useState } from "react";
import { helperfunction } from "../utills/helper";
import ContentWrapper from "./ContentWrapper";
import Carousel from "./Crousel";

const SectionWraper = ({title,firstTab,secondTab,urlEndPoint}) => {
  let [trendingMovies, setTrendingMovies] = useState([]);

  let fetchTrendingData = async () => {
    let temp = await helperfunction(urlEndPoint);
    setTrendingMovies(temp);
  };

  useEffect(() => {
    // fetchTrendingData();
  }, []);

  return (
    <div>
      <ContentWrapper title={title} firstTab={firstTab} secondTab={secondTab} />
      <Carousel MovieList={[]} />
    </div>
  );
};

export default SectionWraper;
