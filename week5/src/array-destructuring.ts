// #1 Variable swapping
export const fruits = ['apple', 'banana'];
let a = fruits[0];
let b = fruits[1];

// Currently, I would get the following:
console.log(a); // 'apple'
console.log(b); // 'banana'

// deconstruct here
a = fruits[0];
b = fruits[1];

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
a = food[0];
b = food[1];
// const others = food[...];

// expected result:
console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
['hello', 'taylor'];

// construct statement here
const statement = ['hello', 'taylor'];
console.log(statement[0] + ', ' + statement[1] + '!');

// expected result: 'hello, taylor!'
