//1
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
//2
function countProps(obj) {
  return Object.keys(obj).length;
}

const user1 = {
  name: "Mango",
  age: 20,
  hobby: "html",
};

console.log(countProps(user1));
//3
function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }

  return bestEmployee;
}
const employees = {
  Ann: 29,
  David: 35,
  Poly: 12,
  Mango: 17,
};

console.log(findBestEmployee(employees));
//4
function countTotalSalary(employees) {
  let total = 0;

  for (const salary of Object.values(employees)) {
    total += salary;
  }

  return total;
}

const salaries = {
  Ann: 2500,
  David: 3000,
  Poly: 1500,
  Mango: 2700,
};
console.log(countTotalSalary(salaries));

//5
function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity"));
console.log(getAllPropValues(products, "category"));
//6
function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice += product.price * product.quantity;
    }
  }

  return totalPrice;
}
const products1 = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "banana", price: 5, quantity: 10 },
  { name: "apple", price: 12, quantity: 2 },
  { name: "orange", price: 8, quantity: 5 },
];
console.log(calculateTotalPrice(products1, "apple"));
console.log(calculateTotalPrice(products1, "banana"));
