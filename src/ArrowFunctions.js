/*
 * Simple Arrow function refactoring
*/

let addTogether = function(x, y) {
    return x + y;
};

// Parenthesis are required for mulpile arity
let addTogetherArrow = (x,y) => x + y;

let addThreeToEach = function(array) {
    return array.map(function(number) {
        return number + 3;
    });
};

// But they are not required for functions with a single argument
let addThreeToEachArrow = array => array.map(number => number + 3);

let sayHello = function() {
    return "Hello";
}

// However, nothing requires something
let sayHelloArrow = () => "Howdy";


/*
 * Arrow functions and this
*/

let iceCream = {
    flavor: 'Mint Choc Chip',
    bitesLeft: 5,

    eat() {
        if (this.bitesLeft > 0) {
            this.bitesLeft--;
        }
    }
}

// sometimes we should contain ourselves and not use new things
let iceCreamArrow = {
    flavor: 'Mint Choc Chip',
    size: 'L',
    bitesLeft: 5,

    eat: () => {
        if (this.bitesLeft > 0) {
            this.bitesLeft--;
        }
    }
}
