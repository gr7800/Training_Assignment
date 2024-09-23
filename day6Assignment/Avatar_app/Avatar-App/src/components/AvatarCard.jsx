import React from "react";

const AvatarCard = ({ user, onDelete }) => {
  const generateRandomHexColor = () => {
    const lightHexValues = "89ABCDEF";
    const darkHexValues = "01234567";
    let lightColor = "#";
    let darkColor = "#";

    for (let i = 0; i < 6; i++) {
      lightColor += lightHexValues[Math.floor(Math.random() * lightHexValues.length)];
      darkColor += darkHexValues[Math.floor(Math.random() * darkHexValues.length)];
    }
    return { lightColor, darkColor };
  };

  const { lightColor, darkColor } = generateRandomHexColor();

  return (
    <div className="avatar" style={{ backgroundColor: lightColor, color: darkColor }}>
      <span>{user[0].toUpperCase()}</span>
      <i className="fa-regular fa-circle-xmark" onClick={onDelete} style={{ backgroundColor: lightColor, color: darkColor }}></i>
    </div>
  );
};

export default AvatarCard;
