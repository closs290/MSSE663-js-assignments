import { expect } from 'chai';
import 'mocha';
import {
  person,
  job,
  nestedObject,
  user,
  address,
  id,
  newObject,
  statement
} from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    expect(person).to.eql('elvis');
    expect(job).to.eql('hip swinger');
  });

  it('#2 should have a variable for every property in the given nested object', () => {
    expect(user).to.eql('elvis');
    expect(address).to.eql({ city: 'denver', state: 'colorado' });
    expect(id).to.eql(1);
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {
    expect(newObject).to.be.eql(nestedObject);
  });

  it('#4 should construct a statement from the given object', () => {
     expect(statement).to.eql('hello, taylor!');
  });
});
