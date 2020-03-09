import { expect, assert } from 'chai';
import 'mocha';
import { 
    newNumbers,
    winners,
    newOriginalContenders,
    bob,
    kyle,
    newOriginalPersons,
    originalUpdatedData,
    newUpdatedData
} from './spread';

describe('spread', function() {
    // #1
    it('should copy an array', function() {
        assert.typeOf(newNumbers, 'array');
        expect(newNumbers).to.have.lengthOf(5);
        expect(newNumbers).to.include(1);
        expect(newNumbers).to.include(2);
        expect(newNumbers).to.include(3);
        expect(newNumbers).to.include(4);
        expect(newNumbers).to.include(5);
    });

    // #2
    it('should combine arrays', function() {
        expect(newOriginalContenders).to.include(winners[0]);
        expect(newOriginalContenders).to.include('second');
        expect(newOriginalContenders).to.include('third');
        expect(newOriginalContenders).to.include('fourth');
        expect(newOriginalContenders).to.include('fifth');
    });

    // #3
    it('should combine objects', function() {
        expect(newOriginalPersons).to.include(bob);
        expect(newOriginalPersons).to.include(kyle);
    });

    // #4
    it('should modify values in arrays of objects with the spread operator', function() {
        expect(originalUpdatedData).to.eql(newUpdatedData);
    });
});