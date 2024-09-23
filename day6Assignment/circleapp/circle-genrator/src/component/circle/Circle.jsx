import RandomColorGenrator from "../../utills/RandomColorGenrator";
import "./Circle.css"

// eslint-disable-next-line react/prop-types
const Circle = ({ top, left }) => {
  let color = RandomColorGenrator();

  return (
    <div
      className="circle"
      style={{
        top: top,
        left: left,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Circle;
