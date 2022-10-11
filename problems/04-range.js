/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

debugger
function range(start, end, array = []) {
  if (start >= end) {
    return array
  }
  array.push(start)
  start++
  return range(start, end, array)
}
range(1, 5); // [1, 2, 3, 4]

// function range(start, end) {
//   if (end - start === 1) {
//     console.log([start])
//     return [start]
//   }
//   if (typeof start === 'number') {
//     start = [start]
//   } else if (start.length < end - start[0]) {
//     start.push(start[start.length - 1] + 1)
//   } else if (start.length >= end - start[0]) {
//     console.log(start)
//     return start
//   }
//   return range(start, end)
// }
// range(3, 6)
// console.log(range(1, 5)); // [1, 2, 3, 4]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
// try {
//   module.exports = range;
// } catch (e) {
//   module.exports = null;
// }
