import { expect } from 'chai';
import 'mocha';

describe('observableAssignment', function() {
    it('should create an observable', function() {
        expect(this.observeStreamOfArray).to.be.a('object');
    });
    it('should create a map of the values in the array', function() {
        expect(this.myArray).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should subscribe to the observable', function() {
        this.observeStreamOfArray.subscribe( (result: number[]) =>
            expect(result.length).to.be.greaterThan(0)
        )
    });
});