/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovieCard from "./SingleMovieCard";

const Carousel = ({ movieList, genres }) => {
  const settings = {
    className: "gap-5",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {movieList &&
        movieList?.length > 0 &&
        movieList?.map((movie, index) => (
          <SingleMovieCard key={index + 1} movieData={movie} genres={genres} />
        ))}
    </Slider>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 w-8 right-6 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-gray-800 opacity-[60%] p-2 rounded-full flex justify-center"
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-right"></i>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 w-8 left-6 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-gray-800 opacity-[60%] p-2 rounded-full flex justify-center"
      onClick={onClick}
    >
      <i className="fa-solid fa-arrow-left"></i>
    </div>
  );
};

export default Carousel;
