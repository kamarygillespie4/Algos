// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr) {
  arr.forEach((element) => {
    if (element % 3 == 0 && element % 5 == 0) {
      console.log("Fizz Buzz");
      return "Fizz Buzz";
    } else if (element % 5 == 0) {
      console.log("Buzz");
      return "Buzz";
    } else if (element % 3 == 0) {
      console.log("Fizz");
      return "Fizz";
    } else {
      console.log(element);
      return element;
    }
  });
};

// for (var i = 0; i <= arr.length; i++) {
//   console.log(i);
//   // if (i % 3 === 0) {
//   //   print "fizz";
//   // }
// }
