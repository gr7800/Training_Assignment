import React, { useEffect, useRef } from 'react';
import horror from "../assets/horror.mp3"

const MusicPlayer = ({ start }) => {
  const audioRef = useRef(null);

  console.log(start)

  useEffect(() => {
    if (start) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
  }, [start]);

  return (
    <audio ref={audioRef} src={horror} preload="auto" />
  );
};

export default MusicPlayer;
