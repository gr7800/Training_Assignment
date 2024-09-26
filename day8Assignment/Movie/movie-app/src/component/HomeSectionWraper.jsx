import ContentWrapper from "./ContentWrapper";
import Carousel from "./Crousel";

const HomeSectionWraper = ({
  title,
  firstTab,
  secondTab,
  activeTab,
  setActiveTab,
  trendingMovies,
  genres,
}) => {
  return (
    <div>
      <ContentWrapper
        title={title}
        firstTab={firstTab}
        secondTab={secondTab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Carousel movieList={trendingMovies} genres={genres} />
    </div>
  );
};

export default HomeSectionWraper;
