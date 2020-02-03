import 'mocha';
import { expect } from 'chai';
import { myCharacter, DNDStat } from './app';

// var assert = require('assert');
describe('MyCharacter', function() {
    const exampleCharacter = new myCharacter('Example', 1, [DNDStat.Strength, DNDStat.Dexterity]);
    describe('#isDown', function() {
        it('should return true when HP is 0', function() {
            exampleCharacter.CurrentHP = 0;
            expect(exampleCharacter.isDown()).to.be(true);
        });
        it('should return false when HP is above 0', function() {
            exampleCharacter.CurrentHP = 1;
            expect(exampleCharacter.isDown()).to.be(false);
        });
    });
    describe('#proficientInWhat', function() {
        it('should return two stats', function() {
            expect(exampleCharacter.proficientInWhat()).to.be([DNDStat.Strength, DNDStat.Dexterity]);
        });
    });
});