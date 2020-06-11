// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// a(0) = 0; a(1) = 1
// a(n) = a(n-1) + a(n-2)

//For example: fibonacciRecursive(6) should return 8
//Time Complexity: O(2^n)
function fibonacciRecursive(n) {
  //Base Case
  if (n === 0) return 0;
  if (n === 1) return 1;

  //Recursive Case
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6));

//Time Complexity: O(n)
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
fibonacciIterative(3);
