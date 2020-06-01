class StackQueue {
  constructor() {
    this.first = [];
    this.second = [];
  }

  enqueue(value) {
    const lengthFirst = this.first.length;
    for (let i = 0; i < lengthFirst; i++) {
      this.second.push(this.first.pop());
    }

    this.first.push(value);
    //console.log(this.first);
    const lengthSecond = this.second.length;
    for (let i = 0; i < lengthSecond; i++) {
      this.first.push(this.second.pop());
    }
  }

  dequeue() {
    return this.first.pop();
  }
  peek() {
    return this.first[this.first.length - 1];
  }
}

const myQueue = new StackQueue();

myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
//console.log(myQueue);
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
// //myQueue.dequeue();
//console.log(myQueue.peek());
console.log(myQueue);
