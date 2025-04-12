//1
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let result = "";

for (let i = 0; i < arr.length; i += 1) {
  result += arr[i];
  if (i !== arr.length - 1) {
    result += ",";
  }
}

console.log(result);

const friends1 = ["Mango", "Poly", "Kiwi", "Ajax"];
const result1 = arr.join(",");
console.log(result1);
//2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemove = "Карточка-3";
const index = cards.indexOf(cardToRemove);

if (index !== -1) {
  cards.splice(index, 1);
}

console.log(cards);
//3
const cardToAdd = "Карточка-6";
cards.push(cardToAdd);
console.log(cards);
//4
const cardToUpdate = "Карточка-4";
const updatedCard = "Оновлена-картка";
const index1 = cards.indexOf(cardToUpdate);
if (index1 !== -1) {
  cards[index1] = updatedCard;
}
console.log(cards);
