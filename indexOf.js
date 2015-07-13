/*
 * Define a function called indexOf that takes in two arguments: an array, and an item that might be in the array. Your function should return the index of the item if it is found within the array; otherwise, it should return -1.
 *
 * Example:
 *
 * indexOf(['a', 'b', 'c'], 'a');
 * // => 0
 * indexOf(['a', 'b', 'c'], 'd');
 * // => -1
*/
function indexOf(array, item) {
  var index = -1;
  for (var i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }
  return index;
}

console.log(indexOf(['a', 'b', 'c'], 'a'));
console.log(indexOf(['a', 'b', 'c'], 'd'));
