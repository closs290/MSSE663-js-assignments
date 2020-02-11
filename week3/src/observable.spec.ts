import { expect } from 'chai';
import 'mocha';
import { observableAssignment } from './observable';

describe('observableAssignment', function() {
    const newObservable = new observableAssignment();
    it('should create an observable', function() {
        expect(newObservable.observeStreamOfArray).to.be.an('object');
    });
    it('should create a map of the values in the array', function() {
        expect(newObservable.myArray).to.include(0);
        expect(newObservable.myArray).to.include(9);
    });
    it('should subscribe to the observable', function() {
        newObservable.observeStreamOfArray.subscribe( (result: number[]) =>
            expect(result.length).to.be.greaterThan(0)
        )
    });
});