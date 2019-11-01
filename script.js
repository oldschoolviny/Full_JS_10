'use strict';

let money, 
    start = function(){
        do{
            money = prompt('Ваш месячный доход?', 50000);
        }
        
        while(isNaN(money) || money === '' || money === null)
    };

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};


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
    let sum = appData.mission / expensesAmount;
    return sum;
};


if(getTargetMonth() > 0){  
    console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + " месяца");
}else{
    console.log('Цель не будет достигнута');  // срабатывает когда ввести отрицательное значение на вопрос.
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