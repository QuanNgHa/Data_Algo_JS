const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length;
  let partitionIndex;

  if (left < right) {
    partitionIndex = partition(array, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, left, right) {
  //partitionIndex Keep track of position items < pivot
  let partitionIndex = left;
  let pivot = right;

  for (j = left; j < right; j++) {
    if (array[j] < array[pivot]) {
      // As the array[i] < pivot => Swap to the Left
      swap(array, j, partitionIndex);
      partitionIndex++;
    }
  }
  //Swap the value at Pivot to the position of Parition Index
  swap(array, partitionIndex, pivot);
  return partitionIndex;
}

const swap = (array, firstIndex, secondIndex) => {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
