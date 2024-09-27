/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RatingCircularProgress = ({
  rating,
  className,
  textColor,
  width,
  height,
}) => {
  const getPathColor = () => {
    if (Number(rating) >= 7) {
      return "green";
    } else if (Number(rating) >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div
      style={{ width: width || 50, height: height || 50 }}
      className={`rounded-full bg-white text-lg font-semibold absolute -bottom-6 left-5 ${className}`}
    >
      <CircularProgressbar
        value={(Number(rating) / 10) * 100}
        text={rating}
        styles={buildStyles({
          textColor: textColor || "#000000",
          pathColor: getPathColor(),
        })}
      />
    </div>
  );
};

export default RatingCircularProgress;
