function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Splitting the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sorting the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merging the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Comparing and merging the elements from left and right
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Adding any remaining elements from left and right
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

const array = [8, 4, 2, 9, 1, 5, 7, 3, 6];
const sortedArray = mergeSort(array);
console.log(sortedArray);

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
