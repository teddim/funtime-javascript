/*
 * Write a function that sums all the numbers in an array
 *
 * Example:
 *
 * sum([5,3,1]);
 * // => 9
 */

var sum = function(array){
  return array.reduce(function(total, num) {
    return total + num;
  })
}


module.exports = {
  sum: sum
}
