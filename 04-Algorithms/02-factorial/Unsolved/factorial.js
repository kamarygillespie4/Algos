// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  let sum = 1;
  for (var i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};
