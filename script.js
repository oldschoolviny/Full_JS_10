'use strict';

let money = +prompt('Ваш месячный доход?'), 
income = 'Freelance',
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 6000,
period = 4,
budgetDay;

console.log(addExpenses.split(', '));

let showTypOf = function(data){
    console.log(data, typeof(data));
};

showTypOf(money);
showTypOf(income);
showTypOf(deposit);

let addExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
lostMoney1 = +prompt('Во сколько это обойдется?'),
addExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
lostMoney2 = +prompt('Во сколько это обойдется?');

let budgetMonth;
budgetMonth = money - lostMoney1 - lostMoney2;

mission = mission / budgetMonth;

budgetDay = budgetMonth / 30;

let getStatusIncome = function(){
    if (budgetDay >= 800){
        return('Высокий уровень дохода');
    } else if(budgetDay >= 300 && budgetDay < 800){
        return('Средний уровень дохода');
    } else if(budgetDay >= 0 && budgetDay < 300){
        return('Низкий уровень дохода');
    } else{
        return('Что то пошло не так');
    }
};

console.log(getStatusIncome());

let getExpensesMonth = function(a, b){
    const sum = a + b;
    return sum;
};

console.log(getExpensesMonth(lostMoney1, lostMoney2));

let getAccumulatedMonth = function(a, b){
    const sum = a - b;
    return sum;
};
console.log(getAccumulatedMonth(money, getExpensesMonth(lostMoney1, lostMoney2)));

const accumulatedMonth = (getAccumulatedMonth(money, getExpensesMonth(lostMoney1, lostMoney2)));

let getTargetMonth = function(a, b){
    const sum = Math.ceil(a / b);
    return sum;
};

console.log(getTargetMonth(mission, accumulatedMonth));