// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.
function getLengthOfMissingArray(arrayOfArrays) {
    if(arrayOfArrays == null || arrayOfArrays.length === 0 || arrayOfArrays.includes(null)) {
        return 0;
    }
    const arrayOfLength = arrayOfArrays
                            .map(array => array.length)
                            .sort((a, b) => a - b);

    if(arrayOfLength.includes(0)) {
        return 0
    }

    for (let index = 0; index < arrayOfLength.length; index ++) {
        if (arrayOfLength[index] + 1 !== arrayOfLength[index+1]) {
            return arrayOfLength[index] + 1;
        }
    }
}

console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
console.log(getLengthOfMissingArray([[ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ] ]), 2);
console.log(getLengthOfMissingArray([[],[0],[4, 2, 3, 1],[1, 4, 1]]), 0);
console.log(getLengthOfMissingArray(null), 0);
console.log(getLengthOfMissingArray([null,[1, 2]]), 0);
console.log(getLengthOfMissingArray([[3, 2],
    [1, 0, 4],
    [0, 4, 4, 0, 0, 1],
    [4, 1, 2, 3, 2],
    [3, 3, 3, 1],
    [3, 3, 4, 2, 3, 4, 3, 3],
    [1, 4, 2, 0, 3, 2, 4, 1, 0],
    [4, 4, 1, 1, 0, 1, 0, 1, 4, 0, 2],
    [4, 1, 4, 2, 1, 1, 1, 4, 2, 1]]), 7)