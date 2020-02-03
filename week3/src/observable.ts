import { Observable, of as ObservableOf } from 'rxjs';

const anArray = [0, 1, 2, 3, 4];
const anObservable = ObservableOf(this.myArray.map( (number) => number));

export class observableAssignment {
    myArray: any[];
    myObservable: Observable<any[]>;
    constructor(array: any[]) {
        this.myArray = array;
    }
    
    // 1 Create an observable stream of an array (utilizing the of keyword).
    // 2 Map over the values in the array.

}

    // 3 Subscribe and ouput values to the console.
    console.log(this.myObservable.subscribe());
