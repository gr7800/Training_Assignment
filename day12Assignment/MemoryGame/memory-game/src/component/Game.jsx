import React, { useEffect, useState, useCallback } from "react";
import { byDefaultImageUrl, imageUrlArray } from "../utils/constants";
import { shuffleArray } from "../utils/helper";
import FlipCard from "./FlipCard";
import Result from "./Result";
import MusicPlayer from "./MusicPlayer";

const GAME_DURATION = 60;

const Game = ({ isStart, setIsStart, difficultyLevel }) => {
  const [score, setScore] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [firstCardIndex, setFirstCardIndex] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const [remainingTime, setRemainingTime] = useState(GAME_DURATION);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (isStart && difficultyLevel) {
      startNewGame(difficultyLevel);
    }
  }, [isStart]);

  useEffect(() => {
    if (remainingTime > 0 && !gameOver) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (remainingTime === 0) {
      setGameOver(true);
    }
  }, [remainingTime, gameOver]);

  const startNewGame = (difficultyLevel) => {
    let imageArray = imageUrlArray.slice(0, difficultyLevel);
    const shuffledArray = shuffleArray([...imageArray, ...imageArray]);
    setImageArray(shuffledArray);
    setScore(0);
    setClickCount(0);
    setFirstCardIndex(null);
    setRemainingTime(GAME_DURATION);
    setGameOver(false);
  };

  const handleCardClick = useCallback(
    (index) => {
      if (isChecking || imageArray[index].isFlipped || gameOver) return;

      const updatedArray = [...imageArray];
      updatedArray[index] = {
        ...updatedArray[index],
        isFlipped: true,
      };
      setImageArray(updatedArray);
      setClickCount((prev) => prev + 1);

      if (firstCardIndex === null) {
        setFirstCardIndex(index);
      } else {
        setIsChecking(true);
        const firstCard = updatedArray[firstCardIndex];

        if (firstCard.id === updatedArray[index].id) {
          setScore((prev) => prev + 1);
          setFirstCardIndex(null);
          setIsChecking(false);
        } else {
          setTimeout(() => {
            updatedArray[firstCardIndex].isFlipped = false;
            updatedArray[index].isFlipped = false;
            setImageArray([...updatedArray]);
            setFirstCardIndex(null);
            setIsChecking(false);
          }, 1000);
        }
      }
    },
    [firstCardIndex, imageArray, isChecking, gameOver]
  );

  const handleRestart = () => {
    setIsStart((prev) => !prev);
  };

  return (
    <div className="w-full gap-4 p-4 bg-gray-600 bg-opacity-[50%] shadow-lg shadow-white rounded-xl">
      {!gameOver ? (
        <div className="flex gap-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {imageArray.map((el, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="border-2 border-red-500 bg-white rounded-lg shadow-md shadow-red-500 cursor-pointer"
              >
                <FlipCard
                  isFlipped={el?.isFlipped}
                  frontImage={byDefaultImageUrl}
                  backImage={el?.image}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-red-500">
            <span className="text-lg bg-white shadow-lg border-red-500 border-2 rounded-full p-2 text-red-500 bg-opacity-[30%]">
              {remainingTime}s
            </span>
            <span className="text-lg">Clicks: {clickCount}</span>
            <span className="text-lg">Score: {score}</span>
          </div>
        </div>
      ) : (
        <Result
          clickCount={clickCount}
          score={score}
          handleRestart={handleRestart}
        />
      )}

      {isStart&&(
        <MusicPlayer start={isStart} />
      )}
    </div>
  );
};

export default Game;
