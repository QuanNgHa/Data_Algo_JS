class HashTable {
    constructor(size) {
        //Hash Table memory cells = size
        this.data = new Array(size);

    }

    //Hash Function
    _hash(key) {
        let hash = 0;
        //Hash function is FAST => Not consider as O(n)
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    //O(1)
    set(key, value) {
        let address = this._hash(key);
        //If this.data[address] not exist => initialize empty array
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        //To console.log the data hashTable after set
        return this.data;
    }
    //O(1) if no collisions; O(n) if collision happens => need loop O(n) through current bucket
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address]
        //If address this.data[address] exist 
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;

    }
    //1st Drawback of Hash Table
    //O(n): Loop through all the keys of HashTable
    keys() {
        const keysArray = [];
        // loop through all memory cells of Hash Table
        for (let i = 0; i < this.data.length; i++) {
            const currentBucket = this.data[i];
            if (currentBucket) {
                //At current cell, loop through all the potential collisions in the bucket
                for (let j = 0; j < currentBucket.length; j++) {
                    //currentBucket[j][0] means key; currentBucket[j][1] means value
                    keysArray.push(currentBucket[j][0])
                }

            }
        }
        return keysArray;
    }

}

//We will use 50 cells of Memory
const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 54));
console.log(myHashTable.get('apples'));

console.log(myHashTable.set('oranges', 2));
console.log(myHashTable.keys());