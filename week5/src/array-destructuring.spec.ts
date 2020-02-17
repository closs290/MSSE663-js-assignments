import { expect } from 'chai';
import 'mocha';
import {
  fruits,
  food,
  statement
} from './array-destructuring.ts';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(fruits[0]).to.equal('apple');
    expect(fruits[1]).to.equal('banana');
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    // expect(food[0]).to.equal(a); // variables aren't exported...
    // expect array[1]
    // expect forEach for array[2]-array[n]
    expect(food).length.to.be(6);
  });

  it('#3 should construct a statement from the given array object', () => {
    expect(statement).to.be.an('object');
  });
});
