/**
 * #1 Create an object literal named `monkey`
 * #2 Give it 3 unique properties
 * #3 Give it at least 2 behaviours/methods of your choice
 * #4 Call the object's method(s) and output a result of your choice to the console.
 * #5 Convert the object literal to an Class
 * #6 Then call its methods and output to the console.
 */

monkey = {
    fur_color: 'orange',
    tail_length: '9100mm',
    number_of_hands: 4,
    describe: function() {
        var description = "The monkey is " + monkey.fur_color;
        description += ", his tail is " + monkey.tail_length + " long";
        description += " and he has " + monkey.number_of_hands + " hands";
        return  description;
    },
    climb: function() {
        return "The monkey climbs the tree."
    },
    swing: function() {
        return "The monkey swings from a branch."
    },
    eat: function() {
        return "The monkey eats a banana."
    }
}

console.log(monkey.describe());
console.log(monkey.climb());
console.log(monkey.swing());
console.log(monkey.eat());

class Monkey {
    color;
    tail_length;
    number_of_hands;
    constructor (color, tail_length, number_of_hands) {
        this.color = color;
        this.tail_length = tail_length;
        this.number_of_hands = number_of_hands;
    }
    climb(){return "The monkey climbs the tree."};
    swing(){return "The monkey swings from a branch."};
    eat(){return "The monkey eats a banana."};
    describe(){
        var description = "The monkey is " + this.color;
        description += ", his tail is " + this.tail_length + " long";
        description += "and he has " + this.number_of_hands + " hands";
        return  description;
    };
}

var myMonkey = new Monkey('black and yellow', '9000mm', 4);
console.log(myMonkey.describe());
console.log(myMonkey.climb() + ' ' + myMonkey.swing() + ' ' + myMonkey.eat());