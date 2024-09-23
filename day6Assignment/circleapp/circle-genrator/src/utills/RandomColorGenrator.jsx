const RandomColorGenrator = () => {
  let darkColor = "#";
  let darkHexValues = "01234567";

  for (let i = 0; i < 6; i++) {
    darkColor +=
      darkHexValues[Math.floor(Math.random() * darkHexValues.length)];
  }

  return darkColor;
};

export default RandomColorGenrator;
