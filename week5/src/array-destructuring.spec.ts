import { expect } from 'chai';
import 'mocha';
import {
  a, b, c, d,
  others,
  statement
} from './array-destructuring.ts';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {
    expect(a).to.eql('apple');
    expect(b).to.eql('banana');
    expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    expect(c).to.eql('banana');
    expect(d).to.eql('apple');
    expect(others).to.eql(['chocolate', 'pears', 'oats', 'pizza']);
  });

  it('#3 should construct a statement from the given array object', () => {
    expect(statement).to.eql('hello, taylor!');
  });
  
});
