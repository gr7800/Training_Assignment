function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

async function sequentialDelayedCounting(limit = 5) {
  let count = 0;
  let id;
  let delay = 1000;

  id = setInterval(() => {
    if (count >= limit) {
      console.log("Sequence Completed");
      clearInterval(id);
      return;
    }
    count++;
    delay = getRandomArbitrary(1000, 9000);
    console.log(`Waiting ${delay} brfore loging ${count}`);
  }, delay);
}

sequentialDelayedCounting(6);
