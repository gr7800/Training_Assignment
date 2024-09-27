import { useLocation } from "react-router-dom";
import ContentWrapper from "../component/ContentWrapper";
import { useEffect, useState } from "react";
import SingleMovieCard from "../component/SingleMovieCard";
import useFetchGenres from "../hooks/useFetchGenres";
import useFetchSearch from "../hooks/useFetchSearch";
import CircularProgressBar from "../component/CircularProgressBar";
import useFetchOnlyMoviesWithFilter from "../hooks/useFetchMoviesTvWithFilter";
import { sortingList } from "../utills/helper";

const Movies = () => {
  const [movieList, setMoviesList] = useState([]);
  const [sortingValue, setSortingValue] = useState("");
  const [genrevalue, setGenreValue] = useState("");
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const { genres, genresList } = useFetchGenres();
  const { moviesList } = useFetchOnlyMoviesWithFilter(
    page,
    genrevalue,
    sortingValue
  );

  useEffect(() => {
    if (moviesList && moviesList.length > 0) {
      setMoviesList((prevMovies) => [...prevMovies, ...moviesList]);
      setIsFetching(false);
    }
  }, [moviesList]);

  useEffect(() => {
    setMoviesList([]);
  }, [sortingValue, genrevalue]);

  useEffect(() => {
    setGenreValue("");
    setSortingValue("");
    setPage(1);
    setMoviesList([]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 10 &&
        !isFetching
      ) {
        setIsFetching(true);
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching]);

  return (
    <div className="w-full pt-[100px] px-10">
      <ContentWrapper
        title={"Explore Movies"}
        parentClass={"mx-0 font-normal text-xl"}
        sortTitle={"Sort By"}
        genereTitle={"Select genres"}
        sortList={sortingList()}
        genresList={genresList}
        sortingvalue={sortingValue}
        genrevalue={genrevalue}
        handleGenreSelect={(value) => setGenreValue(value.id)}
        handleSortSelect={(value) => setSortingValue(value.id)}
      />

      <div className="grid grid-cols-4 gap-5">
        {movieList &&
          movieList.length > 0 &&
          movieList.map((movie, index) => (
            <SingleMovieCard
              movieData={movie}
              genres={genres}
              key={"search" + index}
              contentType = "movie"
            />
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

export default Movies;
