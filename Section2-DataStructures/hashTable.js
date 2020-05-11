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


const hashMap = new map()