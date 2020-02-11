"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const spread_1 = require("./spread");
describe('spread', function () {
    // #1
    it('should copy an array', function () {
        chai_1.expect(spread_1.newNumbers).to.equal([1, 2, 3, 4, 5]);
    });
    // #2
    it('should combine arrays', function () {
        chai_1.expect(spread_1.newOriginalContenders).to.include(spread_1.winners);
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
        chai_1.expect(spread_1.newData).to.include(spread_1.newUpdate);
    });
});
