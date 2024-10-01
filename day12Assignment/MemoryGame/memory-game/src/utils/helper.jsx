export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomNumber(0, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
