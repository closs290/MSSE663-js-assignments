// import { Observable, of as observableOf } from 'rxjs';
import Rx from 'rxjs/Rx';

    // 1 Create an observable stream of an array (utilizing the of keyword).
    // 2 Map over the values in the array.
    // 3 Subscribe and ouput values to the console.

const Rx = require("Rx");

function getObservableArray(){
    return Rx.Observable.create( observer => {
        const possibleCharacterClasses = [
            {name: 'Wizard'},
            {name: 'Sorcerer'},
            {name: 'Bard'},
            {name: 'Fighter'},
            {name: 'Ranger'},
            {name: 'Druid'}
        ];

        possibleCharacterClasses.forEach( charClass => observer.next(charClass) );
        observer.complete();
    });
}

getObservableArray().subscribe(
    charClass => console.log("You could play as a: " + charClass.name),
    () => console.log("... and those are your options right now.")
);

