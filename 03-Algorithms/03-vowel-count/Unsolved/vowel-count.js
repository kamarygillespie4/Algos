// Write code to return the the number of vowels in `str`
//const str = "have a great day";

var vowelCount = function (str) {
  const arr = str.toLowerCase().split("");
  let count = 0;

  arr.forEach((element) => {
    if (
      element == "a" ||
      element == "e" ||
      element == "i" ||
      element == "o" ||
      element == "u"
    ) {
      count = count + 1;
    }
  });
  console.log(count);
  return count;
};

vowelCount("I think, therefore I am.");
