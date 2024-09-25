import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RatingCircularProgress = ({ rating }) => {
  return (
    <div style={{ width: 80, height: 80 }}>
      <CircularProgressbar
        value={rating}
        text={`${rating}%`}
        styles={buildStyles({
          pathColor: `rgba(62, 152, 199, ${rating / 100})`, 
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
    </div>
  );
};

export default RatingCircularProgress;
