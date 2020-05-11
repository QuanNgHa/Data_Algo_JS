//Approach 1: Brute Force Method O(n^2)
/*

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}


*/



//Approach 2: Hash Table O(n)
const firstRecurringCharacter = (input) => {
    const myMap = new Map()
    for (let i = 0; i < input.length; i++) {
        if (myMap[input[i]] !== undefined) {
            return input[i]
        } else {
            myMap[input[i]] = i;
        }
    }
    return undefined;
}

//console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
//console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5, 6, 7, 8]));