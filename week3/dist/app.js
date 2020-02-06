"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DNDStat;
(function (DNDStat) {
    DNDStat["str"] = "Strength";
    DNDStat["dex"] = "Dexterity";
    DNDStat["con"] = "Constitution";
    DNDStat["int"] = "Intelligence";
    DNDStat["wis"] = "Wisdom";
    DNDStat["cha"] = "Charisma";
})(DNDStat = exports.DNDStat || (exports.DNDStat = {}));
class myCharacter {
    constructor(name, hp, saveThrows) {
        this.CharacterName = name;
        this.HitPointTotal = hp;
        this.SavingThrows = saveThrows;
        this.CurrentHP = hp;
    }
    ;
    getName() {
        return this.CharacterName;
    }
    ;
    isDown() {
        return (this.CurrentHP <= 0);
    }
    ;
    proficientInWhat() {
        return this.SavingThrows;
    }
    ;
}
exports.myCharacter = myCharacter;
const myName = 'Solis';
let myHP = 100;
let savingThrows = [DNDStat['dex'], DNDStat['cha']];
console.log("Creating a character with name " + myName + ", Hit Point Total: " + myHP + ", and ");
console.log("Saving throws: " + savingThrows);
const solis = new myCharacter(myName, myHP, savingThrows);
console.log("\n Is he down? ");
console.log(solis.isDown().toString());
let proficiencies = solis.proficientInWhat();
console.log("He is proficient in the following saving throws: " +
    proficiencies[0] + ' and ' + proficiencies[1]);
