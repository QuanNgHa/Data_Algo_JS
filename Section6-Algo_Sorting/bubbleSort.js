const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    maxIndex = 0;
    for (let j = 0; j < arrayLength; j++) {
      //Bubble the Max value to the end of the List
      if (array[maxIndex] > array[j]) {
        //Swap number
        let temp = array[j];
        array[j] = array[maxIndex];
        array[maxIndex] = temp;
      } else {
        maxIndex = j;
      }
    }
  }
  return array;
}

console.log(bubbleSort(numbers));
