import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import car6 from "../assets/car6.jpeg";
import car7 from "../assets/car7.webp";
import car8 from "../assets/car8.jpeg";
import car9 from "../assets/car9.jpg";
import car10 from "../assets/car10.jpg";
import car11 from "../assets/car11.jpg";
import car12 from "../assets/car12.jpg";
import car13 from "../assets/car13.webp";
import car14 from "../assets/car14.webp";
import car15 from "../assets/car15.jpg";

const images = [
  { id: 1, image: car1, isFlipped: false },
  { id: 2, image: car2, isFlipped: false },
  { id: 3, image: car3, isFlipped: false },
  { id: 4, image: car4, isFlipped: false },
  { id: 5, image: car5, isFlipped: false },
  { id: 6, image: car6, isFlipped: false },
  { id: 7, image: car7, isFlipped: false },
  { id: 8, image: car8, isFlipped: false },
  { id: 9, image: car9, isFlipped: false },
  { id: 10, image: car10, isFlipped: false },
  { id: 11, image: car11, isFlipped: false },
  { id: 12, image: car12, isFlipped: false },
  { id: 13, image: car13, isFlipped: false },
  { id: 14, image: car14, isFlipped: false },
  { id: 15, image: car15, isFlipped: false },
];

const imageUrlArray = [...images];

export { imageUrlArray };

export const byDefaultImageUrl =
  "https://i.pinimg.com/originals/fd/3e/27/fd3e27c600d9ee17d7b1a059ce14792e.gif";

export const ghostBgImage =
  "https://64.media.tumblr.com/11482ca6c3af66600392862ca81c63aa/25ca5b3241e8cc11-79/s640x960/bc7f1715937044b617ed7d1d5b51c101f59245d5.gifv";

export const difficultyLevelOption = [
  { id: "difficulty1", name: "Easy", value: "5" },
  { id: "difficulty2", name: "Medium", value: "10" },
  { id: "difficulty3", name: "Expert", value: "15" },
];
