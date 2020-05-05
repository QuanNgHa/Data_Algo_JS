
const mergeSortedArrays = (arr1, arr2) => {
    mergeArray = [];

    let i = j = 0;
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    //Check Input
    if (arr1Length === 0) {
        return arr1;
    }
    if (arr2Length === 0) {
        return arr2;
    }

    while (i < arr1Length && j < arr2Length) {
        if (arr1[i] <= arr2[j]) {
            mergeArray.push(arr1[i])
            i++;
        } else if (arr1[i] > arr2[j]) {
            mergeArray.push(arr2[j])
            j++;
        }
    }
    //console.log(i, j);
    while (i < arr1Length) {
        mergeArray.push(arr1[i])
        i++
    }

    while (j < arr2Length) {
        mergeArray.push(arr2[j])
        j++
    }

    return mergeArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31, 50, 60], [3, 4, 6, 30, 50]));
//console.log([0, 3, 3, 4, 4, 6, 30, 31, 50, 50, 60])