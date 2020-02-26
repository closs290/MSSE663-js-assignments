// #1 Convert this javascript function to a curried function
// export function curryMe(string1, string2, string3): string {
//   return string1 + ' ' + string2 + ' ' + string3;
// }

// source code here
// const a = [].map(val => val);
// export const IWillCurryYou = [...string1, string2, string3[...]]

// #2 Hoist and convert nested functions to curried functions
// function doMath(a) {
//   return function add(b) {
//     return function subtract(c) {
//       return a + b - c;
//     };
//   };
// }

// source code here
export const subtract = (a: number) => (b: number) => (c: number) =>
  (a)+(b)-(c);
export const add = (a: number) => (b: number) => (c: number) =>
  subtract(a)(b)(c);
export const doMath = (a: number) => (b: number) => (c: number) =>
  add(a)(b)(c);


// #3 Write a curried function that returns an array containing the ninjas who have a black belt

interface Ninja {
  name: string;
  belt: string;
}

const ninjasOne: Ninja[] = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

const ninjasTwo: Ninja[] = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here

export const combinedNinjas = [...ninjasOne, ...ninjasTwo];

export const ninjasWithBlackBelts: Ninja[] = combinedNinjas.filter(
  ninja => ninja.belt === 'black'
);

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

type GenericObject = { [key: string]: string};

interface NinjaWarrior extends Ninja {
  status: string
}

const statusTypes: GenericObject = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

const gamerStatusTypes: GenericObject = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

const beltMapper = (arr: Ninja[]) => (status: GenericObject) => arr.map((ninja: Ninja) => {
  return {
    ...ninja,
    status: status[ninja.belt]
  }
})

// source code here
export const ninjaWarriorsWithStatus: NinjaWarrior[] = beltMapper(ninjasOne)(statusTypes);

export const gamerNinjaWarriorsWithStatus: NinjaWarrior[] = beltMapper(ninjasTwo)(gamerStatusTypes);