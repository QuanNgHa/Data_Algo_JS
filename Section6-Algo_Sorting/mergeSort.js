const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, length);
  //console.log("left:", left);
  //console.log("right:", right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let i = 0;
  let j = 0;
  while (i < leftLength && j < rightLength) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < leftLength) {
    result.push(left[i]);
    i++;
  }

  while (j < rightLength) {
    result.push(right[j]);
    j++;
  }
  return result;
}

const answer = mergeSort(numbers);
console.log(answer);
