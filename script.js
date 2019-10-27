 'use strict';

 let money = 5755, 
 income = 'freelance',
 addExpenses = 'Food, House, Car, Gas', 
 deposit = true,
 mission = 6000,
 period = 4,
 budgetDay = 300;

    // Методы и свойства
    // console.log(typeof money);
    // console.log(typeof income);
    // console.log(typeof deposit);
    // console.log(income.length);
    // console.log("Период " + period + ' месяцa'); 
    // console.log("Цель заработать " + mission + ' долларов');
    // console.log(addExpenses.toLowerCase(), addExpenses.split(', '));

    // //Рузультат и остаток от деления
    // console.log(money / 30, money % 2);

 money = +prompt('Ваш месячный доход?');
 console.log(Number(money));

 addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
 console.log(Array(addExpenses));

 deposit =  confirm('Есть ли у вас депозит в банке?');
 console.log(Boolean(deposit));

 console.log(typeof money);
 console.log(typeof income);
 console.log(typeof deposit);

 let addExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
 console.log(addExpenses1);

 let lostMoney1 = +prompt('Во сколько это обойдется?');
 console.log(Number(lostMoney1));

 let addExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
 console.log(addExpenses2);

 let lostMoney2 = +prompt('Во сколько это обойдется?');
 console.log(Number(lostMoney2));

 let budgetMonth;
 budgetMonth = money - lostMoney1 - lostMoney2;
 console.log(budgetMonth);

 mission = mission / budgetMonth;
 console.log(Math.ceil(mission));

 budgetDay = budgetMonth / 30;
 console.log(Math.floor(budgetDay));

 if (budgetDay >= 800){
    console.log('Высокий уровень дохода');
 } else if(budgetDay >= 300 && budgetDay < 800){
    console.log('Средний уровень дохода');
 } else if(budgetDay >= 0 && budgetDay < 300){
    console.log('Низкий уровень дохода');
 } else{
    console.log('Что то пошло не так');
 }