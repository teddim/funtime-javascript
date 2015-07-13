/* Given:
 * var dogs = ["Fido", "Harleigh", "Mali", "Trixie", "Snow", "Victory"];
 * Implement:
 *
 * howManyDogs(dogs);
 * // => 6
 *
 * nameLengths(dogs)
 * // => [4, 8, 4, 6, 4, 7]
 *
 * reverseDogNames(dogs);
 * // => ['odiF', 'hgielraH', 'ilaM', 'eixirT', 'wonS', 'yrotciV']
 *
 * firstThreeDogsWithEach(dogs);
 * //=>  ["Fido", "Harleigh", "Mali"]
 */
 var dogs = ["Fido", "Harleigh", "Mali", "Trixie", "Snow", "Victory"];

var howManyDogs = function(dogs){
  return dogs.length;
};

var nameLengths = function(dogs) {
  return dogs.map(function(dog){
    return dog.length;
  });
};

var reverseDogNames = function(dogs){
  return dogs.map(function(dog){
    return dog.split('').reverse().join('');
  });
};

var firstThreeDogsWithEach = function(dogs){
  var firstThree = [];
  dogs.forEach(function(dog, index){
    if (index < 3){
      firstThree.push(dog);
    }
  });
  return firstThree;
}

console.log(howManyDogs(dogs));
console.log(nameLengths(dogs));
console.log(reverseDogNames(dogs));
console.log(firstThreeDogsWithEach(dogs));
