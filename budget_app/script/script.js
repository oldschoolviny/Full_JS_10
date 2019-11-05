'use strict';

let start = document.getElementById('start');
console.log(start);

let buttonOne = document.getElementsByTagName('button')[0],
    buttonTwo = document.getElementsByTagName('button')[1];
console.log(buttonOne, buttonTwo);

let checkBox = document.querySelector('#deposit-check');
console.log(checkBox);

let income = document.querySelectorAll('.additional_income-item');
console.log(income);

let blocksRight = document.querySelectorAll('[class$=-value]'); //не знаю как называеться
console.log(blocksRight);                                /// Максим в видео [class$= - не пояснял как его делать то тем кто ен знает и нету знакомых??

let mothIncome = document.querySelector('.salary-amount');
console.log(mothIncome);

let addIncomeNameInput = document.querySelector('input.income-title'),
    addIncomeSumInput = document.querySelector('.income-amount');
console.log(addIncomeNameInput, addIncomeSumInput);

let manExpensesNameInput = document.querySelector('input.expenses-title'),
    manExpensesSumInput = document.querySelector('.expenses-amount');
console.log(manExpensesNameInput, manExpensesSumInput);

let potencialExpenses = document.querySelector('.additional_expenses-item');
console.log(potencialExpenses);

let goal = document.querySelector('.target-amount');
console.log(goal);

let rangePeriod = document.querySelector('.period-select');
console.log(rangePeriod);