import HomePageMain from "../component/HomePageMain";
import SectionWraper from "../component/SectionWraper";

const Home = () => {
  return (
    <div className="px-10 space-y-10">
      <div className="w-full h-svh flex flex-col justify-center">
        <HomePageMain />
      </div>
      <div>
        <SectionWraper title={"Trending"} firstTab={"Day"} secondTab={"Weak"} urlEndPoint={"/trending/all/day"} />
      </div>
      <div>
        <SectionWraper title={"What's Popular"} firstTab={"Movies"} secondTab={"Tv Show"} urlEndPoint={"/trending/all/day"} />
      </div>
      <div>
        <SectionWraper title={"Top Rated"} firstTab={"Day"} secondTab={"Weak"} urlEndPoint={"/trending/all/day"} />
      </div>
    </div>
  );
};

export default Home;
