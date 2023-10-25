const divideNumbers = require('./divideNumbers');

try {

  const result = divideNumbers(10, 0);

  console.log('Result:', result);

} catch (error) {

  console.error('Error:', error.message);

}