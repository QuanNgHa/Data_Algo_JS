let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function () {
        console.log('aaaaa');
    }
}

console.log(user.age); //Get O(1)
user.spell = 'Added new key-value pair'; //Add O(1)
console.log(user);



/* Hash Table using Map()*/
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function () { };

// đặt các values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// lấy các values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
// ?vì keyString === 'a string'
myMap.get({});           // undefined, vì keyObj !== {}
myMap.get(function () { }) // undefined, vì  keyFunc !== function () {}