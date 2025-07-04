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
//5
function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    const { [prop]: value } = obj; // деструктуризація за динамічним ключем
    if (value !== undefined) {
      values.push(value);
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

  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      totalPrice += price * quantity;
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

//1
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  nextId: 1,

  createTransaction(amount, type) {
    return {
      id: this.nextId + 1,
      type,
      amount,
    };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття!");
      return;
    }

    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(({ id: tid }) => tid === id) || null;
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(({ type: t }) => t === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};
account.deposit(500);
account.deposit(150);
account.withdraw(200);
account.withdraw(1000);

console.log("Поточний баланс:", account.getBalance());

console.log("Всі транзакції:", account.transactions);

console.log("Деталі транзакції з id=2:", account.getTransactionDetails(2));

console.log(
  "Загальна сума депозитів:",
  account.getTransactionTotal(Transaction.DEPOSIT)
);

console.log(
  "Загальна сума зняття:",
  account.getTransactionTotal(Transaction.WITHDRAW)
);
