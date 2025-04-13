// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("3 dollars should be 502.365 yen", () => {
    const result = fromDollarToYen(3);
    expect(result).toBe(502.365); 5
});

test("1 euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(expected); 
})

test("1565 yen should be 8.7 pounds", () => {
    const result = fromYenToPound(1565);
    expect(result).toBe(8.7);
});



