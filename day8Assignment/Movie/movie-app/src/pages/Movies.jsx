import { useLocation } from "react-router-dom";
import ContentWrapper from "../component/ContentWrapper";
import { useEffect, useState } from "react";
import SingleMovieCard from "../component/SingleMovieCard";
import useFetchGenres from "../hooks/useFetchGenres";
import useFetchSearch from "../hooks/useFetchSearch";
import CircularProgressBar from "../component/CircularProgressBar";

const Movies = () => {
  const [sortingValue, setSortingValue] = useState("Sort By");
  const [genrevalue, setGenreValue] = useState("Select genres");
  const { genres, genresList } = useFetchGenres();
  const list = [
    { "id": 1, "name": "jay" },
    { "id": 1, "name": "jay" },
    { "id": 1, "name": "jay" }];

  return (
    <div className="w-full pt-[100px] px-10">
      <ContentWrapper title={"Explore Movies"} parentClass={"mx-0 font-normal text-xl"} sortList={list} genresList={genresList} sortingvalue={sortingValue} genrevalue={genrevalue} handleGenreSelect={(value=>setGenreValue(value))} handleSortSelect={(value)=>setSortingValue(value)} />

      {/* <div className="grid grid-cols-4 gap-5">
        {moviesList && moviesList.length > 0 && moviesList.map((movie, index) => (
          <SingleMovieCard movieData={movie} genres={genres} key={"search" + index} />
        ))}
      </div>

      {isFetching && (
        <div className="mt-10 flex justify-center">
          <CircularProgressBar />
        </div>
      )} */}
    </div>
  );
};

export default Movies;
