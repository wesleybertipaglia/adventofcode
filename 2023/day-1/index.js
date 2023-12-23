const input = require("./assets/input.js");
const lines = input.split("\n");

function partOne() {
    let totalOfCalibrationValues = 0;
    lines.forEach(line => {
        let numbers = line.replace(/[^\d.]/g, '').split("").map((num) => num);
        let calibrationValue = parseInt(numbers[0] + numbers.pop());
        totalOfCalibrationValues += calibrationValue;
    });
    console.log(totalOfCalibrationValues);
}

function partTwo() {
    function extractNumbersFromString(inputString) {
        const matches = inputString.match(/\d+|(?:(?<=\D|^)[a-zA-Z]+(?=\D|$))/g);
        const numbers = matches ? matches.map(match => isNaN(match) ? getTextNum(match) : Number(match)) : [];
        return numbers;
    }

    function getTextNum(num) {
        const textNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        textNumbers.forEach(text => {
            if (text.includes(num) || num.includes(text)) return textNumbers.indexOf(text);
        });
    }

    const result = extractNumbersFromString(lines[0]);
    console.log(result);
}