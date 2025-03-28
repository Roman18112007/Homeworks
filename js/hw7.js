//1
let numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);
//2
let fruits = ["яблуко", "банан", "вишня"];
fruits.push("груша");
console.log(fruits);
//3
let numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce((sum, num) => sum + num, 0);
console.log(sum);
//4
let numbers2 = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers2.length; i += 1) {
  console.log(numbers2[i]);
}
//5
let items = ["яблуко", "груша", "ананас", "кіт", "кавун"];
for (let i = 0; i < items.length; i += 1) {
  if (strings[i].length > 5) {
    console.log(items[i]);
  }
}
//6
let numbers3 = [3, 7, 12, 5, 20, 8, 15, 1, 30, 25];
let max = Math.max(...numbers3);
console.log(max);
//7
let numbers4 = [3, 7, 12, 5, 20, 8, 15, 1, 30, 25];
for (let i = 0; i < numbers4.length; i += 1) {
  if (numbers4[i] % 2 === 0) {
    console.log(numbers4[i]);
  }
}
