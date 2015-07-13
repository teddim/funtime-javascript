/*
 * Implement a function that takes two arguments. The first argument is an array of numbers. The second argument is a number to compare with each item in the array. Your function should return an array of numbers that are greater than the second argument.
 *
 * Example:
 *
 * findGreater([1,2,3,4,5,6,7,8], 5);
 * // => [6,7,8]
 */

var findGreater = function(arrayOfNum, comparisonNum) {
  return arrayOfNum.filter(function(value) {
    return value > comparisonNum;
  });
}

console.log(findGreater([1,2,3,4,5,6,7,8], 5));
