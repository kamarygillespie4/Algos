// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let sum = 0;
  //initialize value of sum since no numbers have been added it is 0
  arr.forEach((number) => {
    //for each number in the array, add it to the sum
    sum += number;
  });
  //return the sum
  return sum;
};
