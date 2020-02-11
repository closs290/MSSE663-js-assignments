"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const observable_1 = require("./observable");
describe('observableAssignment', function () {
    const newObservable = new observable_1.observableAssignment();
    // make observable and array?
    it('should create an observable', function () {
        chai_1.expect(newObservable.observeStreamOfArray).to.be.an('object');
    });
    it('should create a map of the values in the array', function () {
        chai_1.expect(newObservable.myArray).to.include(0);
        chai_1.expect(newObservable.myArray).to.include(9);
    });
    it('should subscribe to the observable', function () {
        newObservable.observeStreamOfArray.subscribe((result) => chai_1.expect(result.length).to.be.greaterThan(0));
    });
});
