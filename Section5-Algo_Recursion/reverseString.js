//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  //Base case
  if (str === "") return "";
  //str.substr(1) = str[1:end] + str[0]
  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("yoyo mastery"));
//should return: 'yretsam oyoy'
