"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #1 Array copying
exports.numbers = [1, 2, 3, 4, 5];
exports.originalNumbers = exports.numbers.map(number => number);
console.log("Original code #1:");
console.log(exports.originalNumbers);
// refactor here
exports.newNumbers = [...exports.numbers];
console.log("\nMy refactor:");
console.log(exports.newNumbers);
// #2 Combining arrays
exports.winners = ['first'];
exports.runnerUps = ['second', 'third', 'fourth', 'fifth'];
exports.originalContenders = exports.runnerUps.unshift(exports.winners[0]);
console.log("\n\nOriginal code #2:");
console.log(exports.originalContenders);
// refactor here
exports.newWinner = ['first'];
exports.newRunnersUp = ['second', 'third', 'fourth', 'fifth'];
exports.newOriginalContenders = [...exports.newWinner, ...exports.newRunnersUp];
console.log("\nMy refactor:");
console.log(exports.newOriginalContenders);
// #3 Combining objects
exports.bob = {
    man: 'Bob'
};
exports.kyle = {
    boy: 'Kyle'
};
exports.originalPersons = Object.assign(exports.bob, exports.kyle);
// refactor here
exports.newOriginalPersons = Object.assign(Object.assign({}, exports.bob), exports.kyle);
console.log("\n\nMy refactor #3:");
console.log("man: " + exports.newOriginalPersons.man);
console.log("boy: " + exports.newOriginalPersons.boy);
// #4 Modifying values in arrays of objects
exports.data = [
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
exports.update = {
    id: 1,
    task: 'Do the other thing... again'
};
exports.originalUpdates = exports.data.map(task => {
    if (task.id === exports.update.id) {
        return Object.assign(task, exports.update);
    }
    return task;
});
// refactor here
exports.newUpdate = {
    id: 2,
    task: 'There is never a last task'
};
exports.newData = exports.data.map(task => {
    if (task.id === exports.newUpdate.id) {
        task = exports.newUpdate;
    }
    return task;
});
// export const newData = [...data, newUpdate];
console.log("\n\nMy refactor #4:");
exports.newData.map(printTask => {
    console.log(printTask.id.toString() + ': ' + printTask.task.toString());
});
