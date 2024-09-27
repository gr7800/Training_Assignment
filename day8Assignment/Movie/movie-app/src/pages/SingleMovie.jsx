import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetchSingleMovie from "../hooks/useFetchSingleMovie";
import { ImageBaseUrl } from "../utills/constant";
import RatingCircularProgress from "../component/RatingCircularProgress";
import VideoPlayerPopup from "../component/VideoPlayerPopup";
import useFetchVideo from "../hooks/useFetchVideo";

const SingleMovie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const location = useLocation();
  const currentPath = location.pathname;
  const { movie } = useFetchSingleMovie(currentPath);
  const { key } = useFetchVideo(currentPath + "/videos");

  useEffect(() => {
    setMovies(movie);
    if (key.length > 0) {
      let url = `https://www.youtube.com/watch?v=${key}`;
      setVideoUrl(url);
    }
    console.log(key);
  }, [movie]);

  const handleVideoPlay = () => {
    setIsOpen(true);
  };

  return (
    <div className="w-full pt-[100px] px-10 flex flex-col lg:flex-row gap-[25px]">
      <div className="w-full h-screen lg:h-auto lg:w-1/3 flex justify-center items-center overflow-hidden">
        <img
          src={ImageBaseUrl + (movies?.backdrop_path || movies?.poster_path)}
          alt={"Poster"}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:w-2/3 w-full flex flex-col gap-4">
        <div className="title text-3xl font-semibold text-white">
          {movies?.original_name || movies?.title}
        </div>
        <div className="text-lg text-gray-600">
          {movies?.tagline || movies?.status}
        </div>
        <div className="w-full flex gap-1 flex-wrap">
          {movies?.genres?.map((genre) => (
            <div
              key={genre.id}
              className="bg-[#da2f68] text-[#fff] px-2 py-1 rounded-sm text-xs"
            >
              {genre.name}
            </div>
          ))}
        </div>
        <div className="flex justify-start items-center gap-[25px]">
          <div className="relative w-20 h-20">
            <RatingCircularProgress
              rating={movies?.vote_average}
              className={"bg-transparent top-0 left-0"}
              textColor={"#ffffff"}
              width={"80px"}
              height={"80px"}
            />
          </div>
          <div className="playbtn" onClick={handleVideoPlay}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="80px"
              height="80px"
              viewBox="0 0 213.7 213.7"
              enableBackground="new 0 0 213.7 213.7"
              xmlSpace="preserve"
            >
              <polygon
                className="triangle"
                fill="none"
                points="73.5,62.5 148.5,105.8 73.5,149.1 "
              ></polygon>
              <circle
                className="circle"
                fill="none"
                cx="106.8"
                cy="106.8"
                r="103.3"
              ></circle>
            </svg>
            <span className="text">Watch Trailer</span>
          </div>
        </div>
        <div className="w-full text-white">
          <div className="heading text-2xl font-medium">Overview</div>
          <div className="description text-white">{movies?.overview}</div>
        </div>
        <div className="w-full text-white">
          <div className="flex gap-5 py-[15px] border-gray-700 border-b-[1px]">
            <span className="text-bold">Status: </span>
            <span className="text-gray-600">{movies?.status}</span>
          </div>
          <div className="flex gap-5 py-[15px] border-gray-700 border-b-[1px]">
            <span className="text bold">Release Date: </span>
            <span className="text-gray-700">Aug 7, 2024</span>
          </div>
          <div className="flex gap-5 py-[15px] border-gray-700 border-b-[1px]">
            <span className="text-bold">Runtime: </span>
            <span className="text-gray-600">2h 11m</span>
          </div>
          <div className="flex gap-5 py-[15px] border-gray-700 border-b-[1px]">
            <span className="text-bold">Director: </span>
            <span className="text-gray-600">Justin Baldoni</span>
          </div>
          <div className="flex gap-5 py-[15px] border-gray-700 border-b-[1px]">
            <span className="text-bold">Writer: </span>
            <span className="text-gray-600">Christy Hall</span>
          </div>
        </div>
      </div>
      <VideoPlayerPopup
        videoSrc={videoUrl}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default SingleMovie;
