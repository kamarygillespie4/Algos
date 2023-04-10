// Write code to return the largest number in the given array

//To compare numbers instead of strings, the compare function can subtract b from a. The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

//To compare numbers instead of strings, the compare function can subtract a from b. sort the array in descending order
function compareNumbers(a, b) {
  return b - a;
}

var maxNum = function (arr) {
  const lowHigh = arr.sort(compareNumbers);
  console.log(lowHigh);
  return lowHigh[0];
  //sort the array from high to low, return index position 0
};
