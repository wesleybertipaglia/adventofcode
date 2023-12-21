const input = require("./assets/input.js");
const lines = input.split("\n");

let totalOfCalibrationValues = 0;
lines.forEach(line => {
    let numbers = line.replace(/[^\d.]/g, '').split("").map((num) => num);
    let calibrationValue = parseInt(numbers[0] + numbers.pop());
    totalOfCalibrationValues += calibrationValue;
});
console.log(totalOfCalibrationValues);