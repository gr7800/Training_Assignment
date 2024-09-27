import { useLocation } from "react-router-dom";
import ContentWrapper from "../component/ContentWrapper";
import { useEffect, useState } from "react";
import SingleMovieCard from "../component/SingleMovieCard";
import useFetchGenres from "../hooks/useFetchGenres";
import useFetchSearch from "../hooks/useFetchSearch";
import CircularProgressBar from "../component/CircularProgressBar";

const SearchResultPage = () => {
  const [initialQuery, setInitialQuery] = useState("");
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const temp = currentPath.split("/search/")[1] || "";
  const { searchList } = useFetchSearch(page, initialQuery);
  const { genres } = useFetchGenres();

  useEffect(() => {
    setInitialQuery(temp);
    setPage(1);
    setMoviesList([]);
  }, [temp]);

  useEffect(() => {
    if (searchList && searchList.length > 0) {
      setMoviesList((prevMovies) => [...prevMovies, ...searchList]);
      setIsFetching(false);
    }
  }, [searchList]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10 && !isFetching) {
        setIsFetching(true);
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching]);

  if(searchList.length==0){
    return <div className="flex w-full h-screen text-xl font-semibold px-10 pt-[100px] text-white">
      <span>Sorry, Results not found!</span>
    </div>
  }

  return (
    <div className="w-full pt-[100px] px-10">
      <ContentWrapper title={`Search results for '${initialQuery}'`} parentClass={"justify-start items-start mx-0 font-normal text-xl"} />
      <div className="grid grid-cols-4 gap-5">
        {moviesList && moviesList.length > 0 && moviesList.map((movie, index) => (
          <SingleMovieCard movieData={movie} genres={genres} key={"search" + index} />
        ))}
      </div>
      {isFetching && (
        <div className="mt-10 flex justify-center">
          <CircularProgressBar />
        </div>
      )}
    </div>
  );
};

export default SearchResultPage;
