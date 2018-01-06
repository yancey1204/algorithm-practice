function sumPairs(numbers, sum) {
    const numbersCopy = numbers.map(n => n);
    for (let firstIndex = 0; firstIndex < numbers.length; firstIndex ++) {
        numbersCopy.shift();
        const expectNumber = sum - numbers[firstIndex];
        if (numbersCopy.includes(expectNumber)) {
            return [numbers[firstIndex], expectNumber];
        }
    }
}


const l1= [1, 4, 8, 7, 3, 15];
const l2= [1, -2, 3, 0, -6, 1];
const l3= [20, -13, 40];
const l4= [1, 2, 3, 4, 1, 0];
const l5= [10, 5, 2, 3, 7, 5];
const l6= [4, -2, 3, 3, 4];
const l7= [0, 2, 0];
const l8= [5, 9, 13, -3];

console.log(sumPairs(l1, 8), [1, 7]);
console.log(sumPairs(l2, -6), [0, -6]);
console.log(sumPairs(l3, -7), undefined);
console.log(sumPairs(l4, 2), [1, 1]);
console.log(sumPairs(l5, 10), [3, 7]);
console.log(sumPairs(l6, 8), [4, 4]);
console.log(sumPairs(l7, 0), [0, 0]);
console.log(sumPairs(l8, 10), [13, -3]);