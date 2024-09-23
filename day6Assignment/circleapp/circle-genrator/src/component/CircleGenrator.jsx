/* eslint-disable no-unused-vars */
import Circle from "./circle/Circle";
import { useEffect, useState } from "react";
import "./CircleGenrator.css";
const CircleGenrator = () => {
  let [circleList, setCircleList] = useState([]);
  let [redoData, setRedodata] = useState([]);

  const handleMouseClick = (e) => {
    e.preventDefault();
    // console.log(e);
    if (e.target?.nodeName !== "BUTTON") {
      setCircleList((prev) => [...prev, [e?.pageX, e?.pageY]]);
    }
  };

  const handleUndoClick = (e) => {
    e.preventDefault();
      let temp = circleList.pop();
      setCircleList(circleList)
      setRedodata((prev) => [...prev, temp]);

     if(circleList.length==0)setRedodata([]);
  };

  const handleRedoPress = (e) => {
    e.preventDefault();
    if (redoData.length !== 0) {
      let temp = redoData.pop();
      setRedodata(redoData);
      setCircleList((prev) => [...prev, temp]);
    }
    
  };

  const handleReset = (e) => {
    e.preventDefault();
    setCircleList([]);
    setRedodata([]);
  };

  return (
    <div className="circleWrapper" onClick={handleMouseClick}>
      <button onClick={handleUndoClick} disabled={circleList.length == 0}>
        Undo
      </button>
      <button onClick={handleRedoPress} disabled={redoData.length == 0}>
        Redo
      </button>
      <button
        onClick={handleReset}
        disabled={circleList.length == 0 && redoData.length == 0}
      >
        Reset
      </button>
      {circleList && circleList.length > 0
        ? circleList.map((point, index) => (
            <Circle
              key={index + 1}
              left={`${point[0] - 8}px`}
              top={`${point[1] - 8}px`}
            />
          ))
        : "Please click to genrate circle"}
    </div>
  );
};

export default CircleGenrator;
