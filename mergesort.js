const mergeSort = array => {
    // Check if array can be split
    if (array.length < 2) return array;
    // Get middle index
    const middle = Math.floor(array.length / 2 );
    // Split array in two sides
    const leftSide = array.slice(0,middle);
    const rightSide = array.slice(middle, array.length);
    // Use recursion to continue splitting
    return merge(mergeSort(leftSide), mergeSort(rightSide)); 
}

const merge = (left , right) => {
    // Create New array
    const result = [];
    // Check if either left array or right array is empty
    while(left.length && right.length){
        // Find lower value
        if (left[0] <= right[0]) {
            // Add left value
            result.push(left.shift());
        }
        else {
            // Add right value
            result.push(right.shift());
        }
    }
    // Merge left array 
    while(left.length) result.push(left.shift()); 
    // Merge right array 
    while(right.length) result.push(right.shift());
    // Return result array
    return result;
}

console.log(mergeSort([3, 94, 86, 82, 90,
    10, 87, 36, 61, 8,
    17, 15, 22, 10, 23,
    78, 25, 2, 30, 45,
    98, 43, 98, 59, 53,
    57, 2, 64, 1, 41,
    32, 58, 19, 99,60,
    74, 48, 80, 44, 25,
    68, 1, 89, 77, 60,
    25, 99, 30, 76, 32,
    57, 82, 52, 44, 72,
    87, 34, 87, 65, 30,
    54, 6, 31, 33, 44,
    44, 42, 82, 90, 17,
    9, 98, 28, 86, 69,
    3, 17, 8, 45, 98,
    12, 47, 95, 43, 72,
    39, 41, 82, 74, 56,
    65, 79, 50, 26, 67,
    100, 24, 67, 38, 57])) ;
