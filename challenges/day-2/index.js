const input = require("./assets/input.js");
const lines = input.split("\n");

function extractNumbersFromString(inputString) {
    const matches = inputString.match(/\d+|(?:(?<=\D|^)[a-zA-Z]+(?=\D|$))/g);
    const numbers = matches ? matches.map(match => isNaN(match) ? getTextNum(match) : Number(match)) : [];
    return numbers;
}

function getTextNum(num) {
    const textNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    textNumbers.forEach(text => {
        if (text.includes(num) || num.includes(text)) return textNumbers.indexOf(text);
    });
}

const result = extractNumbersFromString(lines[0]);
console.log(result);