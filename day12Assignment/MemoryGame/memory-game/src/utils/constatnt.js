import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import car6 from "../assets/car6.jpeg";

const images = [
  { id: 1, image: car1, isFlipped: false },
  { id: 2, image: car2, isFlipped: false },
  { id: 3, image: car3, isFlipped: false },
  { id: 4, image: car4, isFlipped: false },
  { id: 5, image: car5, isFlipped: false },
  { id: 6, image: car6, isFlipped: false }
];

const imageUrlArray = [...images, ...images];

export { imageUrlArray };

export const byDefaultImageUrl = "https://static.thenounproject.com/png/4303392-200.png"
