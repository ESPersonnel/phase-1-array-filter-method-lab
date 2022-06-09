// Code your solution here
// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function findMatching(array, string) {
  return array.filter(function(element) {
    return element.toLowerCase().startsWith(string.toLowerCase());
  });
}

function fuzzyMatch(array, string) {
  return array.filter(function(element) {
    return element.toLowerCase().startsWith(string.toLowerCase());
  });
}

function matchName(array, string) {
  return array.filter(function(element) {
    return element.name.toLowerCase().startsWith(string.toLowerCase());
  });
}