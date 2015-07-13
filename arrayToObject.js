// Make a function that will take a dog array and make an object. Like so:
// { 'German Shepherd': { size: '90 lbs.', 'bred for': 'Work' },
//   Pointer: { size: '40 lbs.', 'bred for': 'Hunting' },
//   Corgi: { size: '30 lbs.', 'bred for': 'Awesomeness' } }

var dogArray = function(dogs) {
  var dogObject = {};
  for (var i = 0; i < dogs.length; i++) {
    dogObject[dogs[i][0]] = {"size": dogs[i][1], "bred for": dogs[i][2]};
  }
  return dogObject;
};

var dogArrayForEach = function(dogs) {
  var dogObject = {};
  dogs.forEach(function(dog) {
    dogObject[dog[0]] = {"size": dog[1], "bred for": dog[2]};
  });
  return dogObject;
};

var dogArrayReduce = function(dogs){
  return dogs.reduce(function(dogObject, dog) {
    dogObject[dog[0]] = {"size": dog[1], "bred for": dog[2]};
    return dogObject;
  },{});
};

module.exports = {
  dogArray: dogArray
}
