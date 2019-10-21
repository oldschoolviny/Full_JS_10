let money = 5755, 
income = 'freelance',
addExpenses = 'Food, House, Car, Gas', 
deposit = true,
mission = 2000,
period = 4,
budgetDay = 200;

//Методы и свойства
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(income.length);
console.log("Период " + period + ' месяцa'); 
console.log("Цель заработать " + mission + ' долларов');
console.log(addExpenses.toLowerCase(), addExpenses.split(', '));

//Рузультат и остаток от деления
console.log(money / 30, money % 2);