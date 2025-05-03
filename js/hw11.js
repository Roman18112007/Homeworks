//1
const bankAccount = {
  ownerName: "Romchik",
  accountNumber: "UA123456789",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
    alert(`Поповнення успішне. Новий баланс: ${this.balance} грн`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів на рахунку.");
    } else {
      this.balance -= amount;
      alert(`Зняття успішне. Новий баланс: ${this.balance} грн`);
    }
  },
};
if (confirm("Бажаєте поповнити рахунок?")) {
  const amount = parseFloat(prompt("Введіть суму для поповнення:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(amount);
  } else {
    alert("Некоректна сума.");
  }
} else if (confirm("Бажаєте зняти кошти?")) {
  const amount = parseFloat(prompt("Введіть суму для зняття:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.withdraw(amount);
  } else {
    alert("Некоректна сума.");
  }
} else {
  alert(`Ваш поточний баланс: ${bankAccount.balance} грн`);
}
//2
const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,

  isBelowZero() {
    return this.temperature < 0;
  },
};
const inputTemp = parseFloat(prompt("Введіть температуру (°C):"));

if (!isNaN(inputTemp)) {
  weather.temperature = inputTemp;

  if (weather.isBelowZero()) {
    alert("Температура нижче 0 градусів Цельсія");
  } else {
    alert("Температура 0 або вище градусів Цельсія");
  }
} else {
  alert("Введено некоректне значення температури.");
}
//3
const user = {
  name: "Олена",
  email: "olena@mail.com",
  password: "olena1234",

  login() {
    const inputEmail = prompt("Введіть email:");
    const inputPassword = prompt("Введіть пароль:");

    if (inputEmail === this.email && inputPassword === this.password) {
      alert(`Вітаємо, ${this.name}! Вхід виконано успішно.`);
    } else {
      alert("Неправильний email або пароль.");
    }
  },
};
user.login();
//4
const movie = {
  title: "Інтерстеллар",
  director: "Крістофер Нолан",
  year: 2014,
  rating: 8.6,

  isHighlyRated() {
    return this.rating > 8;
  },
};
console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
if (movie.isHighlyRated()) {
  console.log("Фільм має високий рейтинг (понад 8).");
} else {
  console.log("Рейтинг фільму 8 або нижче.");
}
