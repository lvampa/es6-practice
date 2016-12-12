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
    })

    describe("", function() {
        
    });

})
