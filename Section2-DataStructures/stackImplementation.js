// //Stack using Linked Lists
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }

//     peek() {
//         return this.top;
//     }
//     push(value) {
//         //console.log(value)
//         const newNode = new Node(value);
//         if (this.length === 0) {
//             this.top = newNode;
//             this.bottom = newNode;
//         } else {
//             const holdingPointer = this.top;
//             this.top = newNode;
//             this.top.next = holdingPointer;
//         }
//         this.length++;
//         return this;

//     }
//     pop() {
//         if (!this.top) {
//             return null;
//         }
//         if (this.top === this.bottom) {
//             //Only 1 node left in Stack
//             this.bottom = null;
//         }
//         //const holdingPointer = this.top;
//         this.top = this.top.next;
//         this.length--;
//         //return holdingPointer;
//         return this;
//     }
// }

//Stack with Array
class Stack {
    constructor() {
        this.array = []
    }
    peek() {
        return this.array[this.array.length - 1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop()
        return this;
    }

}

const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');
console.log(myStack);
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())

