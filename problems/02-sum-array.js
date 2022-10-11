/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  let lastNum = arr.pop()
  debugger

  if (arr.length <= 0) {
    debugger
    return lastNum
    debugger
  }
  debugger
  let first = sumArray(arr)
  debugger
  return first + lastNum
  debugger
}
sumArray([1, 2, 3, 4, 5]) // 1, 3, 6, 10, 15

// alternative solve
// function sumArray(arr, sum = 0) {
//   if (arr.length <= 0) {
//     return sum
//   }
//   sum += arr.pop()
//   return sumArray(arr, sum)
// }
// sumArray([1, 2, 3, 4, 5]) // 1, 3, 6, 10, 15
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
