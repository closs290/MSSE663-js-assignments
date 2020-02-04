import 'mocha';
import { expect } from 'chai';
import { myCharacter, DNDStat } from './app';

// var assert = require('assert');
describe('MyCharacter', function() {
    const exampleCharacter = new myCharacter('Example', 1, [DNDStat['str'], DNDStat['dex']]);
    describe('#getName', function() {
        it('should return the character\'s name', function() {
            expect(exampleCharacter.getName()).to.equal('Example');
        });
    });
    describe('#isDown', function() {
        it('should return true when HP is 0', function() {
            exampleCharacter.CurrentHP = 0;
            expect(exampleCharacter.isDown()).to.equal(true);
        });
        it('should return false when HP is above 0', function() {
            exampleCharacter.CurrentHP = 1;
            expect(exampleCharacter.isDown()).to.equal(false);
        });
    });
    describe('#proficientInWhat', function() {
        it('should return two stats', function() {
            expect(exampleCharacter.proficientInWhat()).to.include(DNDStat['str']);
            expect(exampleCharacter.proficientInWhat()).to.include(DNDStat['dex']);
        });
    });
});