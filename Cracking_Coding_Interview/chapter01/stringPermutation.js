const checkInclusion = (str1, str2) => {
  /*
    * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1
    * @param {str} str1 The first number to add.
    * @param {str} str2 The second number to add.
    * @return {boolean} The result of if str2 contains permutation of str1.
  */

  const substringLength = str1.length;

  for (let i = 0; i < (str2.length - substringLength) + 1; i++) {
    if (checkPermute(str1, str2.slice(i, i + substringLength))) return true;
  }

  return false;
};

var checkPermute = function (stringOne, stringTwo) {
  /*
    * Check if stringOne & stringTwo is permutation of each other 
    *
  */
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
    // else sort and compare
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    //need to .split("") the string to sort the array
    //JS dont have .sort() for string, only for array

    //need to .join("") after sorted to compare to string
    //Since === cannot compare 2 arrays
    var sortedStringOne = stringOne.split("").sort().join("");
    var sortedStringTwo = stringTwo.split("").sort().join("");
    return sortedStringOne === sortedStringTwo;
  }
};

// Tests
console.log(checkInclusion("ab", "eidbaooo"), true);

console.log(checkInclusion("aba", "aaba"), true);

console.log(checkInclusion("ab", "eidboaoo"), false);
