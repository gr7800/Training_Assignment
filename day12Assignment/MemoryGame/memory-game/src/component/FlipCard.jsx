import React from 'react';

const FlipCard = ({ isFlipped, frontImage, backImage }) => {
  return (
    <div className="w-64 h-64 perspective">
      <div className={`relative w-full h-full transition-transform duration-600 ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full backface-hidden">
          <img src={frontImage} alt="Front" className="w-full h-full object-cover" />
        </div>
        <div className={`absolute w-full h-full backface-hidden rotate-y-180`}>
          <img src={backImage} alt="Back" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
