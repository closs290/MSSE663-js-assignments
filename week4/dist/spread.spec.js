"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const spread_1 = require("./spread");
describe('spread', function () {
    // #1
    it('should copy an array', function () {
        chai_1.assert.typeOf(spread_1.newNumbers, 'array');
        chai_1.expect(spread_1.newNumbers).to.have.lengthOf(5);
        chai_1.expect(spread_1.newNumbers).to.include(1);
        chai_1.expect(spread_1.newNumbers).to.include(2);
        chai_1.expect(spread_1.newNumbers).to.include(3);
        chai_1.expect(spread_1.newNumbers).to.include(4);
        chai_1.expect(spread_1.newNumbers).to.include(5);
    });
    // #2
    it('should combine arrays', function () {
        chai_1.expect(spread_1.newOriginalContenders).to.include(spread_1.winners[0]);
        chai_1.expect(spread_1.newOriginalContenders).to.include('second');
        chai_1.expect(spread_1.newOriginalContenders).to.include('third');
        chai_1.expect(spread_1.newOriginalContenders).to.include('fourth');
        chai_1.expect(spread_1.newOriginalContenders).to.include('fifth');
    });
    // #3
    it('should combine objects', function () {
        chai_1.expect(spread_1.newOriginalPersons).to.include(spread_1.bob);
        chai_1.expect(spread_1.newOriginalPersons).to.include(spread_1.kyle);
    });
    // #4
    it('should modify values in arrays of objects', function () {
        chai_1.expect(spread_1.newData).to.have.property('id', 0);
        chai_1.expect(spread_1.newData).to.have.property('task', 'Do the thing');
        chai_1.expect(spread_1.newData).to.have.property('id', 2);
        chai_1.expect(spread_1.newData).to.have.property('task', 'There is never a last task');
    });
});
