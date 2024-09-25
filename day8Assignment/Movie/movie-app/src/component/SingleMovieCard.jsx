import { ImageBaseUrl } from "../utills/constant";
import RatingCircularProgress from "./RatingCircularProgress";

const SingleMovieCard = () => {
  let movieData = {
    backdrop_path: "/is3ZdGCPEKTW7IyDe0khvE1nc6R.jpg",
    id: 225634,
    name: "Monsters",
    original_name: "Monsters",
    overview: "The story of the Menéndez brothers, who were convicted in 1996 of murdering their parents José and Mary Louise “Kitty” Menéndez.",
    poster_path: "/x9YC2rpXHUFMqI1hCekKDm9UE4w.jpg",
    media_type: "tv",
    adult: false,
    original_language: "en",
    genre_ids: [18, 80],
    popularity: 962.683,
    first_air_date: "2024-09-19",
    vote_average: 7.721,
    vote_count: 61,
    origin_country: ["US"]
  }

  const genres = ["Drama", "Crime"];

  return (
    <div className="max-w-[18.625rem] h-full my-3 rounded-lg shadow-2xl shadow-black overflow-hidden">
      <div>
        <div 
          className="w-full h-[324px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${ImageBaseUrl + movieData.backdrop_path})` }}
        >
          <RatingCircularProgress rating ={movieData?.vote_average} />
        </div>
        <div className="absolute bottom-4 left-2 w-full">
          <div className="flex gap-2 justify-end px-5 flex-wrap">
            {genres.map((genre, index) => (
              <div key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <span className="block text-xl sm:text-2xl text-white font-bold">{movieData.name}</span>
        <span className="block text-gray-500 text-lg sm:text-xl">{new Date(movieData.first_air_date).toLocaleDateString()}</span>
      </div>
      
    </div>
  );
}

export default SingleMovieCard;
