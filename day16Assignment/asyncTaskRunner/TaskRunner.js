class TaskRunner {
  //   constructor(concurrency) {
  //     this.concurrency = concurrency;
  //     this.onGoingTask = 0;
  //     this.queue = [];
  //   }

  //   async push(task) {
  //     if (this.onGoingTask < this.concurrency) {
  //       this.runTask(task);
  //     } else {
  //       this.queue.push(task);
  //     }
  //   }

  //   async runTask(task) {
  //     this.onGoingTask++;
  //     try {
  //       await task();
  //     } finally {
  //       this.onGoingTask--;
  //       if (this.queue.length > 0) {
  //         const nextTask = this.queue.shift();
  //         this.runTask(nextTask);
  //       }
  //     }
  //   }

  constructor(concurrency) {
    this.concurrency = concurrency;
    this.onGoing = 0;
    this.queue = [];
  }
  async push(task) {
    if (Array.isArray(task)) {
      task.forEach((tas) => {
        if (this.onGoing < this.concurrency) {
          this.runTask(tas);
        } else {
          this.queue.push(tas);
        }
      });
    } else {
      if (this.onGoing < this.concurrency) {
        this.runTask(task);
      } else {
        this.queue.push(task);
      }
    }
  }
  async runTask(task) {
    this.onGoing++;
    try {
      await task();
    } finally {
      this.onGoing--;
      if (this.queue.length > 0) {
        let nextTask = this.queue.shift();
        this.runTask(nextTask);
      }
    }
  }
}

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const t1 = async () => {
  console.log("t1 started");
  await delay(2000);
  console.log("t1 finished");
};
const t2 = async () => {
  console.log("t2 started");
  await delay(1000);
  console.log("t2 finished");
};
const t3 = async () => {
  console.log("t3 started");
  await delay(1500);
  console.log("t3 finished");
};
const t4 = async () => {
  console.log("t4 started");
  await delay(1000);
  console.log("t4 finished");
};
const t5 = async () => {
  console.log("t5 started");
  await delay(500);
  console.log("t5 finished");
};

const prateek_Ke_Ex = new TaskRunner(3);

prateek_Ke_Ex.push(t1);
prateek_Ke_Ex.push([t2, t3, t4, t5]);
// prateek_Ke_Ex.push(t2);
// prateek_Ke_Ex.push(t3);
// prateek_Ke_Ex.push(t4);
// prateek_Ke_Ex.push(t5);
