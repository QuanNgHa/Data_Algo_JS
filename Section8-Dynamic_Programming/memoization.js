function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    //Place the actual function inside here
    if (n in cache) {
      return cache[n];
    } else {
      console.log("Added to cache");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();

console.log("5 + 80 = ", memoized(5));
console.log("5 + 80 = ", memoized(5));
