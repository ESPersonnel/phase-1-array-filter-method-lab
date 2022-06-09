
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