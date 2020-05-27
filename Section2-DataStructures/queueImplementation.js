class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.last;
    }
    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            const holdingPointer = this.last;

            this.last = newNode;
            this.last.next = holdingPointer;
        }
        this.length++;
        return this;

    }
    dequeue() {
    }
    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('John');
myQueue.enqueue('Chris');
myQueue.enqueue('CodeXplore');
console.log(myQueue);

