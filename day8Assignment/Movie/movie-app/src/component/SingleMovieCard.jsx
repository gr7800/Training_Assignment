/* eslint-disable react/prop-types */
import { ImageBaseUrl } from "../utills/constant";
import RatingCircularProgress from "./RatingCircularProgress";

const SingleMovieCard = ({ movieData, genres }) => {
  return (
    <div className="w-[calc(25% - 15px)] h-full  mx-5 rounded-2xl shadow-sm shadow-black overflow-hidden">
      <div>
        <div
          className="w-full max-w-[340px] h-[324px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${ImageBaseUrl + (movieData?.backdrop_path || movieData?.poster_path)})`,
          }}
        >
          <div className="w-full flex gap-1 justify-end px-5 flex-wrap absolute bottom-5">
            {movieData?.genre_ids?.map((genre, index) => (
              <div
                key={index}
                className="bg-[#da2f68] text-[#fff] px-[5px] py-[2px] rounded-sm text-xs"
              >
                {genres[genre]}
              </div>
            ))}
          </div>
          <RatingCircularProgress rating={movieData?.vote_average} />
        </div>
      </div>
      <div className="p-4 mt-4">
        <span className="block text-xl sm:text-2xl text-white font-bold whitespace-nowrap">
          {movieData?.name || movieData?.title}
        </span>
        <span className="block text-gray-500 text-lg sm:text-xl">
          {new Date(movieData?.first_air_date || movieData?.release_date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default SingleMovieCard;
