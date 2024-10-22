function createCounterPromise(maxCount = 3, timeoutMs = 5000) {
  let interval;
  let count = 1;
  let terminate = false;

  const promise = new Promise((resolve, reject) => {
    interval = setInterval(() => {
      if (terminate) {
        clearInterval(interval);
        reject({ message: "Operation canceled after 2 seconds" });
        return;
      }

      if (timeoutMs <= count * 1000) {
        clearInterval(interval);
        reject({ message: `Operation Timout counter reached to ${count}` });
      }

      if (count >= maxCount) {
        clearInterval(interval);
        resolve(`Done! Counter reached ${count}`);
      }
      console.log(`Counter ${count}`);

      count++;
    }, 1000);
  });

  const cancel = () => {
    terminate = true;
  };

  return { promise, cancel };
}

// Usage:
const { promise, cancel } = createCounterPromise(16, 15000);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

// OUTPUT:
// Counter 1
// Counter 2
// Counter 3
// Counter 4
// Counter 5
// Counter 6
// Counter 7
// Counter 8
// Counter 9
// Counter 10
// Done ! Counter reached 10

// Cancel after 2 seconds
// setTimeout(cancel, 2000); //This should cancel the operation after 2 seconds with message "Operation canceled after 2 seconds"
