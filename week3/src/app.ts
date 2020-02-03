export enum DNDStat {
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
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
let savingThrows = [DNDStat.Dexterity, DNDStat.Charisma];
console.log("Creating a character with name " + myName + ", Hit Point Total: " + myHP + ", and ");
console.log("Saving throws: " + savingThrows);
const solis = new myCharacter(myName, myHP, savingThrows);

console.log("\n Is he down? ");
if (solis.isDown() ) {
    console.log("yes")
} else {
    console.log("no")
}

let proficiencies = solis.proficientInWhat();
console.log("He is proficient in the following saving throws: " + 
    proficiencies.forEach(saveProficiency => {
        saveProficiency;
    })
);