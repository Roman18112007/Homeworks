//1
const processArray = (array, callback) => {
  return callback(array);
};

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);
const numbers = [5, 10, 2, 8, 3];

console.log("Сума:", processArray(numbers, getSum));
console.log("Мінімум:", processArray(numbers, getMin));
console.log("Максимум:", processArray(numbers, getMax));

//2
const operate = (a, b, callback) => {
  return callback(a, b);
};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Ділення на нуль неможливе");

console.log("Додавання:", operate(10, 5, add));
console.log("Віднімання:", operate(10, 5, subtract));
console.log("Множення:", operate(10, 5, multiply));
console.log("Ділення:", operate(10, 5, divide));
