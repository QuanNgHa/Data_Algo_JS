//Input: 'Hello, World'
//Output: 'dlroW ,olleH'

function reverse(str) {
    //Check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good'
    }

    const backwards = [];
    for (let i = str.length - 1; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');

}
function reverse2(str) {
    //check for valid input
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

reverse('Timbits Hi')
reverse('Timbits Hi')
reverse3('Timbits Hi')

console.log(reverse('Hello, World'));
