import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovieCard from "./SingleMovieCard";

const Carousel = ({ MovieList }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const movies = [
        { title: "Movie 1", image: "/path/to/movie1.jpg" },
        { title: "Movie 2", image: "/path/to/movie2.jpg" },
        { title: "Movie 3", image: "/path/to/movie3.jpg" },
        { title: "Movie 4", image: "/path/to/movie4.jpg" },
        { title: "Movie 5", image: "/path/to/movie5.jpg" },
        { title: "Movie 6", image: "/path/to/movie6.jpg" },
    ];

    return (
        <div className="movie-carousel">
            <Slider {...settings}>
                {movies.length > 0 && movies.map((movie, index) => (
                    <SingleMovieCard key={index + 1} movieData={movie} />
                ))}
            </Slider>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-gray-800 p-2 rounded-full"
            onClick={onClick}
        >
            ➡️
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 cursor-pointer text-white bg-gray-800 p-2 rounded-full"
            onClick={onClick}
        >
            ⬅️
        </div>
    );
};

export default Carousel;
