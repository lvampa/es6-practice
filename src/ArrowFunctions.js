/*
 * Simple Arrow function refactoring
*/

let addTogether = function(x, y) {
    return x + y;
};

// Parenthesis are required for mulpile arity
let addTogetherArrow = (x,y) => {
    return x + y
};

let addThreeToEach = function(array) {
    return array.map(function(number) {
        return number + 3;
    });
};

// But they are not required for functions with a single argument
let addThreeToEachArrow = array => {
    return array.map(number => number + 3)
};

let sayHello = function() {
    return "Hello";
}

// However, nothing requires something
let sayHelloArrow = () => {
    return "Howdy"
};
