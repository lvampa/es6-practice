describe("ES6 Arrow Functions", function() {

    describe("Simple old school functions", function() {
        it("it should add two numbers together", function() {
           expect(5).toEqual(addTogether(3,2));
        });

        it("It should add 3 to each element of the array", function() {
            let a = [1, 2, 3];
            let b = [4, 5, 6];
            expect(b).toEqual(addThreeToEach(a));
        });

        it("It should say 'Hello'", function() {
            expect("Hello").toEqual(sayHello());
        });

    });

    describe("Simple functions refactored with ES6 arrow functions", function() {
        it("It should add two numbers together in ES6", function() {
           expect(7).toEqual(addTogetherArrow(5,2));
        });

        it("It should add 3 to each element of the array in ES6", function() {
            let a = [2, 3, 4];
            let b = [5, 6, 7];
            expect(b).toEqual(addThreeToEachArrow(a));
        })

        it("It should say 'Howdy' in ES6", function() {
            expect("Howdy").toEqual(sayHelloArrow());
        });
    });

    describe("What happened to 'this' in the old days", function() {
        it("It should eat some of the icecream", function() {
            let originalSize = iceCream.bitesLeft;
            iceCream.eat();
            let newSize = iceCream.bitesLeft

            expect(originalSize).toEqual(newSize + 1)
        })
    });

    describe("How the arrow function changes 'this'", function() {
        it("It should not eat some of the icecream because 'this' does not refer to the ice cream", function() {
            let originalSize = iceCreamArrow.bitesLeft;
            iceCreamArrow.eat();
            let newSize = iceCreamArrow.bitesLeft

            expect(originalSize).not.toEqual(newSize + 1)
        })
    });
})
