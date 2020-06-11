function findFactorialRecursive(number) {
  //Base Case: where we stop
  if (number === 2) return 2;
  //Recursive Case:
  return number * findFactorialRecursive(number - 1);
}

console.log(findFactorialRecursive(5));
