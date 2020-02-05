import { Observable, of as observableOf } from 'rxjs';

export class observableAssignment {

    public myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    public observeStreamOfArray: Observable<number[]>;

    constructor() {
        // 1 Create an observable stream of an array (utilizing the of keyword).
        this.observeStreamOfArray = observableOf(this.myArray);
        // 2 Map over the values in the array.
        this.myArray.map(num => 
            num += 1
        );
        // 3 Subscribe and ouput values to the console.
        this.observeStreamOfArray.subscribe(
            num => console.log(num),
            () => console.log('End of array')
        );
    };
}

