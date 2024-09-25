import HomePageMain from "../component/HomePageMain";
import Trending from "../component/TrendingDataList";

const Home = () => {
  return (
    <div>
      <div className="w-full h-svh flex flex-col justify-center">
        <HomePageMain />
        <Trending />
      </div>
    </div>
  );
};

export default Home;
