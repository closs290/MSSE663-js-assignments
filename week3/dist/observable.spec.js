"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const observable_1 = require("./observable");
describe('observableAssignment', function () {
    const newObservable = new observable_1.observableAssignment();
    it('should create an observable', function () {
        chai_1.expect(this.newObservable.observeStreamOfArray).to.be.a('object');
    });
    it('should create a map of the values in the array', function () {
        chai_1.expect(this.newObservable.myArray).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should subscribe to the observable', function () {
        this.newObservable.observeStreamOfArray.subscribe((result) => chai_1.expect(result.length).to.be.greaterThan(0));
    });
});
