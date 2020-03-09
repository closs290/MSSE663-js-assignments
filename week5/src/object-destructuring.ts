// #1 Object Destructuring
export const object = { name: 'elvis', title: 'hip swinger' };

// deconstruct here
export const {name, title} = object;
export const person = object.name;
export const job = object.title;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new object):
console.log(person); // 'elvis'
console.log(job); // 'hip swinger'

export const nestedObject = {
  user: 'elvis',
  address: {
    city: 'denver',
    state: 'colorado'
  },
  id: 1
};

// deconstruct here
export const {user, address, id} = nestedObject;

// expected results:
console.log(user); // 'elvis'
console.log(address); // { city: 'denver', state: 'colorado' }
console.log(id); // 1

// #3 Create a new object given the destructed values above

// reconstruct here
export const newObject = {user, address, id};

// #4 Object with key value pairs: construct a statement

export const {greeting, personName} = { greeting: 'hello', personName: 'taylor' };

// construct statement here
export const statement = greeting + ', ' + personName + '!';
console.log(statement);

// expected result: 'hello, taylor!'
