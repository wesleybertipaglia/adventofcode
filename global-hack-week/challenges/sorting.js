const numbers = [5, 2, 8, 1, 9, 3];

// simple
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// bubble sort
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const sortedNumbers = sortArray(numbers);
console.log(sortedNumbers);

const sortedNumbersBubble = bubbleSort(numbers);
console.log(sortedNumbersBubble);