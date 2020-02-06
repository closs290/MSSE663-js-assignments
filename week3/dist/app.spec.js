"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const app_1 = require("./app");
// var assert = require('assert');
describe('MyCharacter', function () {
    const exampleCharacter = new app_1.myCharacter('Example', 1, [app_1.DNDStat['str'], app_1.DNDStat['dex']]);
    describe('#getName', function () {
        it('should return the character\'s name', function () {
            chai_1.expect(exampleCharacter.getName()).to.equal('Example');
        });
    });
    describe('#isDown', function () {
        it('should return true when HP is 0', function () {
            exampleCharacter.CurrentHP = 0;
            chai_1.expect(exampleCharacter.isDown()).to.equal(true);
        });
        it('should return false when HP is above 0', function () {
            exampleCharacter.CurrentHP = 1;
            chai_1.expect(exampleCharacter.isDown()).to.equal(false);
        });
    });
    describe('#proficientInWhat', function () {
        it('should return two stats', function () {
            chai_1.expect(exampleCharacter.proficientInWhat()).to.include(app_1.DNDStat['str']);
            chai_1.expect(exampleCharacter.proficientInWhat()).to.include(app_1.DNDStat['dex']);
        });
    });
});
