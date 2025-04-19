//1
function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);

//2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
}
console.log(calculateEngravingPrice("Happy Birthday", 10));
//3
function findLongestWord(string) {
  const words1 = string.split(" ");
  let longestWord = words1[0];

  for (let i = 1; i < words1.length; i += 1) {
    if (words1[i].length > longestWord.length) {
      longestWord = words1[i];
    }
  }

  return longestWord;
}
console.log(findLongestWord("Неперевершений яблучний сік"));
//4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  } else {
    return string.slice(0, 40) + "...";
  }
}
console.log(formatString("aewasrdtfyguhijoikliuplokiuytgfrdeswrdtfyguhj"));
//5
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}
console.log(checkForSpam("Get best SALE now!"));
console.log(checkForSpam("Happy year"));
console.log(checkForSpam("SPAM messages"));
