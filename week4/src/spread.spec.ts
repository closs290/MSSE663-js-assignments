import { expect } from 'chai';
import 'mocha';
import { 
    newNumbers,
    winners,
    newOriginalContenders,
    bob,
    kyle,
    newOriginalPersons,
    newUpdate,
    newData
} from './spread';

describe('spread', function() {
    // #1
    it('should copy an array', function() {
        expect(newNumbers).to.equal([1, 2, 3, 4, 5]);
    });

    // #2
    it('should combine arrays', function() {
        expect(newOriginalContenders).to.include(winners);
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
    it('should modify values in arrays of objects', function() {
        expect(newData).to.include(newUpdate);
    });
});