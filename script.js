'use strict';

let money, 
income = 'Freelance',
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
deposit = confirm('Есть ли у вас депозит в банке?'),
mission = 72000,
period = 4;

let start = function(){
    money = prompt('Ваш месячный доход?', 50000);

    while(isNaN(money) || money === '' || money === null){
        money = prompt('Ваш месячный доход?', 5000);
    }
};

start();


let showTypOf = function(item){
    console.log(item, typeof item);
};

showTypOf(money);
showTypOf(income);
showTypOf(deposit);

let expenses1,
    expenses2;

console.log(addExpenses.toLowerCase().split(', '));

let getExpensesMonth = function(){
    let sum = 0;
    

    for(let i = 0; i < 2; i++){
        
        if(i === 0){
            expenses1 = prompt('Ввeдите обязательнную статью расходов?', "Квартплата");
        }
        if(i === 1){
            expenses2 = prompt('Ввeдите обязательнную статью расходов?', "Бензин");
        }
        
        sum += +prompt('Во сколько это обойдется?', 2500);
        
        while(isNaN(sum) || sum === '' || sum === null){
        sum = +prompt('Во сколько это обойдется?', 2500);
    }
}

    return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function(){
    return money - expensesAmount;
};

let getTargetMonth = function(){
    let sum = mission / expensesAmount;
    return sum;
};

let targetMonth = getTargetMonth();
console.log(targetMonth);

if(targetMonth <= 0){  
    console.log('Цель не будет достигнута');  // срабатывает когда ввести отрицательное значение на вопрос.
}else{
    console.log('Цель будет достигнута за ' + Math.ceil(targetMonth) + " месяца");
}

let budgetDay = getAccumulatedMonth() / 30;

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