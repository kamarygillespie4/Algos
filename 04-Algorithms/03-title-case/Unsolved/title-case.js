// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

//Example Sentence: hello beautiful world

var titleCase = function (str) {
  var arr = str.split(" ");
  //splits the string into a new array of words
  //Ex: ["hello","beautiful","world"]
  var newArr = [];
  //initializes an empty array

  for (var i = 0; i < arr.length; i++) {
    //creates a variable called i and sets it equal to 0, while i is less than the value of the length of arr(3 words)
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    //newArr is the empty array we initialized before which is where we will be pushinng the capitalized words to
    //Grab the word at every index position and take the character at  position  0 and capitalize it (the first letter)
    //The capitalized letter is then added back to the word (with the first letter sliced off)
  }
  return newArr.join(" ");
  //the new array is then joined back together as a string, with a space between each word and returned
};
