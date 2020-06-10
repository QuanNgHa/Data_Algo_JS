class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //Code here
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      //Keep Looping => Need to break when finding the place to insert
      while (true)
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            //If nothing in the left
            currentNode.left = newNode;
            //Return BST tree => Break
            return this;
          }
          //Keep Looping to the left to find the place to insert
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            //If nothing in the right
            currentNode.right = newNode;
            //Return BST tree => Break
            return this;
          }
          //Keep Looping to the Right to find the place to insert
          currentNode = currentNode.right;
        }
    }
  }
  lookup(value) {
    //Code here
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      while (true) {
        if (!currentNode) return false;
        if (value === currentNode.value) {
          return currentNode;
        } else if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
    }
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(111));

//     9
//  4     20
//1  6  15  170

//Recursion Method:
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
