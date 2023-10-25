const divideNumbers = require('./divideNumbers');

test('Divide two numbers', () => {

  expect(divideNumbers(10, 5)).toBe(2);
});

test('Divide by zero should throw an error', () => {

  expect(() => divideNumbers(10, 0)).toThrowError('Cannot divide by zero');
});