/*
 *
 * Use the forEach method to implement a function that returns the average number within an array.
 *
 * Example:
 *
 * avg([1,2,3]);
 * // => 2
 *
 */

var avg = function(array){
  // var total = 0;
  // array.forEach(function(num){
  //   total += num;
  // })
  // return total/array.length;

  return array.reduce(function(total, num) {
    return total + num;
  }, 0)/array.length;
}

module.exports = {
  avg: avg
}
