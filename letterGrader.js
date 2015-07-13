/* Given an array of test scores [ 68, 74, 99, 45, 83, 95 ] and the scale: F is less than 60, D is 60 to 69, C is 70 to 79, B is 80 to 89, A is 90 to 100.
 * Write a function that returns an array
 * Example:
 * convertToGrade(arr);
 * // => [ D, C, A, F, B, A ]
 */

function convertToGrade(arr){
  var scale = {A: 100 , B: 90, C: 80, D: 70, F: 60};
  return arr.map(function(score){
    for (grade in scale) {
      if (score < scale[grade]) {
        var finalGrade = grade;
      }
    }
    return finalGrade;
  })
}

var arr = [ 68, 74, 99, 45, 83, 95 ] ;
console.log(convertToGrade(arr));
