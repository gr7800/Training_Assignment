import React, { useEffect, useState } from "react";
import { byDefaultImageUrl, imageUrlArray } from "../utils/constatnt";
import { shuffleArray } from "../utils/helper";
import FlipCard from "./FlipCard";

const Game = ({ isStart, setIsStart }) => {
  const [score, setScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [firstCardIndex, setFirstCardIndex] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    const shuffledArray = shuffleArray(imageUrlArray);
    setImageArray(shuffledArray);
  }, []);

  const handleClick = (e, index) => {
    e.preventDefault();
    console.log({ index });

    if (isChecking || imageArray[index].isFlipped) return;

    const newImageArray = [...imageArray];
    newImageArray[index].isFlipped = true;
    setImageArray(newImageArray);
    setClickCount((prev) => prev + 1);

    if (firstCardIndex === null) {
      setFirstCardIndex(index);
    } else {
      setIsChecking(true);
      const firstCard = newImageArray[firstCardIndex];

      if (firstCard.id === newImageArray[index].id) {
        setScore((prev) => prev + 1);
        setFirstCardIndex(null);
        setIsChecking(false);
      } else {
        setTimeout(() => {
          newImageArray[firstCardIndex].isFlipped = false;
          newImageArray[index].isFlipped = false;
          setImageArray(newImageArray);
          setFirstCardIndex(null);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex gap-2">
      <div className="grid grid-cols-4 min-w-[90%] gap-2">
        {imageArray.map((el, index) => (
          <div key={index} onClick={(e)=>handleClick(e,index)}>
            <FlipCard
              isFlipped={el?.isFlipped}
              frontImage={byDefaultImageUrl}
              backImage={el?.image}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5">
        <span>Timer: {remainingTime}</span>
        <span>Clicks: {clickCount}</span>
        <span>Score: {score}</span>
      </div>
    </div>
  );
};

export default Game;
