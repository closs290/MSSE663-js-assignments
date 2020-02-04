export enum DNDStat {
    'str' = 'Strength',
    'dex' = 'Dexterity',
    'con' = 'Constitution',
    'int' = 'Intelligence',
    'wis' = 'Wisdom',
    'cha' = 'Charisma'
}

export interface Character {
    CharacterName: string;
    HitPointTotal: number;
    SavingThrows: DNDStat[];
    isDown(): boolean;
    proficientInWhat(): DNDStat[];
}

export class myCharacter implements Character {
    CharacterName: string;
    HitPointTotal: number;
    CurrentHP: number;
    SavingThrows: DNDStat[];

    constructor(name: string, hp: number, saveThrows: DNDStat[]) {
        this.CharacterName = name;
        this.HitPointTotal = hp;
        this.SavingThrows = saveThrows;
        this.CurrentHP = hp;
    }
    getName(): string {
        return this.CharacterName;
    }
    isDown(): boolean {
        return (this.CurrentHP <= 0);
    };
    proficientInWhat(): DNDStat[] {
        return this.SavingThrows;
    };
}

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
    proficiencies[0] + ' and ' + proficiencies[1]
);