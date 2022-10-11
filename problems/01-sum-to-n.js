/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/


function sumToN(n) { // n === 5 // n === 4 // n === 3 // n === 2 // n === 1 // n === 0
  if (n <= 0) {
    return null
  }
  return sumToN(n - 1) + n // sumToN(4) + 5 // sumToN(3) + 4 // sumToN(2) + 3 // sumToN(1) + 2 //
}
console.log(sumToN(5))
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumToN;
} catch (e) {
  module.exports = null;
}
