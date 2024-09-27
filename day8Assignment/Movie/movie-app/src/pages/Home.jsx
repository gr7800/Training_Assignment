import HomePageMain from "../component/HomePageMain";
import useFetchGenres from "../hooks/useFetchGenres";
import useFetchMovies from "../hooks/useFetchMovies";
import { useState } from "react";
import { randomeNumberGenrator } from "../utills/helper";
import { ImageBaseUrl } from "../utills/constant";
import HomeSectionWraper from "../component/HomeSectionWraper"

const Home = () => {
  const [activeTabTrending, setActiveTabTrending] = useState("Day");
  const [activeTabPopular, setActiveTabPopular] = useState("Movies");
  const [activeTabTopRated, setActiveTabTopRated] = useState("Movies");

  const { trendingMovies } = useFetchMovies("trending", activeTabTrending);
  const { trendingMovies: popularMovies } = useFetchMovies(
    "popular",
    activeTabPopular
  );
  const { trendingMovies: topRatedMovies } = useFetchMovies(
    "top_rated",
    activeTabTopRated
  );

  const { genres } = useFetchGenres();
  const randomeNumber = randomeNumberGenrator(0, trendingMovies.length);
  
  return (
    <div className="px-10 space-y-10">
      <div className="w-full h-svh flex flex-col justify-center">
        <HomePageMain randomImage={ImageBaseUrl+trendingMovies[randomeNumber]?.poster_path} />
      </div>
      <div>
        <HomeSectionWraper
          title={"Trending"}
          firstTab={"Day"}
          secondTab={"Week"}
          sectionType={"trending"}
          activeTab={activeTabTrending}
          setActiveTab={setActiveTabTrending}
          trendingMovies={trendingMovies}
          genres={genres}
          iscarousel={true}
        />
      </div>
      <div>
        <HomeSectionWraper
          title={"What's Popular"}
          firstTab={"Movies"}
          secondTab={"Tv Show"}
          sectionType={"popular"}
          activeTab={activeTabPopular}
          setActiveTab={setActiveTabPopular}
          trendingMovies={popularMovies}
          genres={genres}
          iscarousel={false}
        />
      </div>
      <div>
        <HomeSectionWraper
          title={"Top Rated"}
          firstTab={"Movies"}
          secondTab={"Tv Show"}
          sectionType={"top_rated"}
          activeTab={activeTabTopRated}
          setActiveTab={setActiveTabTopRated}
          trendingMovies={topRatedMovies}
          genres={genres}
        />
      </div>
    </div>
  );
};

export default Home;
