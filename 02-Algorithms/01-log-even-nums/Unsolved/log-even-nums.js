// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      //because every other number in the array will be even, we only need every other number
      //we can do this by checking if i(the index position) is divisible by 2
      //if so, the value of i will be logged in the console
      console.log(i);
    }
  }
};
