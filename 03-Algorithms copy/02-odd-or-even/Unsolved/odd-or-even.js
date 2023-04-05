// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
  const divide = num / 2;
  //This will give us an integer or a number ending in .5

  var result = divide - Math.floor(divide);
  //math.floor will round the number it is passed down to the nearest integer.
  //result will either be .5 if the number is odd(had a remainder) or 0 if the number is even(no remainder)

  if (result !== 0) {
    return "odd";
  } else {
    return "even";
  }
};
