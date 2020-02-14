// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

// deconstruct here
const person = object.name;
const job = object.title;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

// #2 Object Matching: Nested destructuring
export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

// deconstruct here
const user = nestedObject.user;
const address = nestedObject.address;
const id = nestedObject.id;

// expected results:
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #3 Create a new object given the destructed values above

// reconstruct here

const newObject = {user, ...address, id};

// #4 Object with key value pairs: construct a statement
const greeting = { greeting: 'hello', name: 'taylor' };

// construct statement here
const statement = console.log(greeting.greeting + ', ' + greeting.name + '!');

// expected result: 'hello, taylor!'
