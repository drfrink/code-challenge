// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.


module.exports = Hamming;

function Hamming() {

  function checkStringLength(string1, string2){
    if (string1.length != string2.length){
      throw 'DNA strands must be of equal length.';
    }
    return string1.length;
  };

  function countStringMismatches(stringLength, splitString1, splitString2){
    var count = 0
    for (var i = 0; i < stringLength; i++) {
      if (splitString1[i] != splitString2[i]) {
        count+=1;
      };
    };
    return count;
  };

  this.compute = function(string1, string2) {
    var splitString1 = string1.split("");
    var splitString2 = string2.split("");
    var stringLength = checkStringLength(splitString1,splitString2);
    return countStringMismatches(stringLength, splitString1, splitString2);
  };
};