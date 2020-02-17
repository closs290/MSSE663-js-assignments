import { expect } from 'chai';
import 'mocha';
import {
  object,
  nestedObject,
  user,
  address,
  id,
  newObject,
  greeting,
  statement
} from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    // expect(person).to.exist();
    // expect(job).to.exist();
    // expect length of variables to equal length of object properties
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    // expect user to exist;
    // expect address to exist;
    // expect address to be an object;
    // expect id to exist;
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {
    expect(newObject).to.be.an('object');
    expect(user).to.equal(nestedObject.user); // maybe this should be #2, and #3 is testing something different.
    expect(address).to.equal(nestedObject.address); // objects are hard to check
    expect(id).to.equal(nestedObject.id);
    // expect newObject to contain user
    // expect newObject to contain nested city
    // expect newObject to contain nested state
    // expect newObject to contain id
    // expect id to be a number
  });

  it('#4 should construct a statement from the given object', () => {
     expect(statement).to.be.an('object');
  });
});
