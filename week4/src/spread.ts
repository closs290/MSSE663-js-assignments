// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log("Original code #1:");
console.log(originalNumbers);

// refactor here
export const newNumbers = [...numbers];
console.log("\nMy refactor:");
console.log(newNumbers);

// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];

export const originalContenders = runnerUps.unshift(winners[0]);
console.log("\n\nOriginal code #2:");
console.log(originalContenders);

// refactor here
export const newWinner = ['first'];
export const newRunnersUp = ['second', 'third', 'fourth', 'fifth'];

export const newOriginalContenders = [...newWinner, ...newRunnersUp];
console.log("\nMy refactor:");
console.log(newOriginalContenders);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);

// refactor here
export const newOriginalPersons = {...bob, ...kyle};
console.log("\n\nMy refactor #3:");
console.log("man: " + newOriginalPersons.man);
console.log("boy: " + newOriginalPersons.boy);

// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};

export const originalUpdatedData = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});

// refactor here
export const newUpdate = {
  id: 1,
  task: 'Do the other thing... again'
};

export const newUpdatedData =  data.map(task => {
  if (task.id === update.id) {
    return { ...newUpdate };
  }
  return task;
});

console.log("\n\nMy refactor #4:");
data.map(printTask => {
  console.log(printTask.id.toString() + ': ' + printTask.task.toString());
})
