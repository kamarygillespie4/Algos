// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  const rev = str.split("").reverse().join("");
  console.log(rev);

  if (str !== rev) {
    console.log("false");
    return false;
  } else {
    return true;
  }
};
