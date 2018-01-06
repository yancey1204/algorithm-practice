const sumPairs = function(numbers, sum) {
    const numbersCopy = numbers.map(n => n);
    for (let firstIndex = 0; firstIndex < numbers.length; firstIndex ++) {
        numbersCopy.shift();
        const expectNumber = sum - numbers[firstIndex];
        if (numbersCopy.includes(expectNumber)) {
            return [numbers[firstIndex], expectNumber];
        }
    }
};

module.exports = sumPairs;