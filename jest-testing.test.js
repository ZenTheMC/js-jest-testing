const jestTesting = require("./jest-testing");

test("A capitalize function that takes a string and returns it with the first character capitalized", () => {
    expect(jestTesting.capitalize("this is a test")).toBe("This is a test");
});

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(jestTesting.reverseString("this is a test")).toBe("tset a si siht");
});

test("A calculator object that contains functions for the 4 basic operations: ADD", () => {
    expect(jestTesting.calculator.add(1,1)).toBe(2);
});

test("A calculator object that contains functions for the 4 basic operations: SUBTRACT", () => {
    expect(jestTesting.calculator.sub(2,1)).toBe(1);
});

test("A calculator object that contains functions for the 4 basic operations: MULTIPLY", () => {
    expect(jestTesting.calculator.mul(2,3)).toBe(6);
});

test("A calculator object that contains functions for the 4 basic operations: DIVIDE", () => {
    expect(jestTesting.calculator.div(10,2)).toBe(5);
});