import { expect } from 'chai';
import 'mocha';
import { observableAssignment } from './observable';

describe('observableAssignment', function() {
    const array = [0, 1, 2, 3];
    const exampleObservable = observeStreamOfArray(array);
    describe('#createArray', function() {
        it('should create an array', function() {
            // expect(exampleObservable.myArray).to.be([]);
        });
    });
    describe('#createObservable', function() {
        it('should create an observable', function() {
            // expect(exampleObservable.myObservable).to.be([]);
        });
    });
    describe('#mapValuesOfArray', function() {
        it('should create a map of the values in the array', function() {
            // expect(true).to.be(true);
        });
    });
    describe('#subscribeToObservabe', function() {
        it('should subscribe to the observable', function() {
            // expect(true).to.be(true);
        });
    });
    describe('#outputToConsole', function() {
        it('should output values to console', function() {
            // expect(true).to.be(true);
        });
    });
});