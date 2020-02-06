"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
describe('observableAssignment', function () {
    it('should create an observable', function () {
        chai_1.expect(this.observeStreamOfArray).to.be.a('object');
    });
    it('should create a map of the values in the array', function () {
        chai_1.expect(this.myArray).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should subscribe to the observable', function () {
        this.observeStreamOfArray.subscribe((result) => chai_1.expect(result.length).to.be.greaterThan(0));
    });
});
