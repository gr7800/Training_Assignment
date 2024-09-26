/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RatingCircularProgress = ({ rating }) => {
  const getPathColor = ()=>{
    if(Number(rating)>=7){
      return "green"
    }else if(Number(rating)>=5){
      return "orange"
    }else{
      return "red"
    }
  }
  return (
    <div style={{ width: 50, height: 50 }} className="rounded-full bg-white text-lg font-semibold absolute -bottom-6 left-5">
      <CircularProgressbar
        value={(Number(rating)/10)*100}
        text={rating}
        styles={buildStyles({
          textColor: "#000000",
          pathColor: getPathColor(),
        })}
      />
    </div>
  );
};

export default RatingCircularProgress;
