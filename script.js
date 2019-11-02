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
        let sum = 0, ask, answer,
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){
            if(i === 0){
                ask = prompt('Ввeдите обязательнную статью расходов?', "Квартплата");
                answer = +prompt('Во сколько это обойдется?', 2500);
                appData.expenses[ask] = answer;
            }else{
                ask = prompt('Ввeдите обязательнную статью расходов?', "Проезд");
                answer = +prompt('Во сколько это обойдется?', 1800);
                appData.expenses[ask] = answer;
            }
        }
        return sum;
    },
    getExpensesMonth: function(){
        let spending = 0;
        for(let key in appData.expenses){
        spending += appData.expenses[key];
        }
        return spending;
    },
    getBudget: function(){
        function budgetMonth(){
            appData.budgetMonth = appData.budget - appData.getExpensesMonth();
            console.log('Ваш бюджет на месяц: ' + appData.budgetMonth);
            return appData.budgetMonth;
        }
        budgetMonth();

        function budgetDay(){
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            console.log('Ваш бюджет на день: ' + appData.budgetDay);
            return appData.budgetDay;
        }
        budgetDay();

        function budgetPeriod(){
            appData.budgetPeriod = money * appData.period;
        }
        budgetPeriod();

        function expensesPeriod(){
            return appData.getExpensesMonth() * appData.period;
        }
        expensesPeriod();

        function incomePeriod(){
            appData.accumalatiom = budgetPeriod() - expensesPeriod();
            if(appData.accumalatiom > 0){
                console.log('Накоплено за период: ' + appData.accumulation);
            } else if(appData.accumalatiom <= 0){
                console.log('Ничего не накоплено, вы в минусе.');
            }
        }
        incomePeriod();
        
    },
    getTargetMonth: function(){
        let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);

        if(targetMonth > 0){  
            console.log('Цель будет достигнута за ' + targetMonth + " месяца");
        }else{
            console.log('Цель не будет достигнута');  // срабатывает когда ввести отрицательное значение на вопрос.
        }
    },
    getStatusIncome: function(){
        if (appData.budgetDay >= 800){
            return('Высокий уровень дохода');
        } else if(appData.budgetDay >= 300 && appData.budgetDay < 800){
            return('Средний уровень дохода');
        } else if(appData.budgetDay >= 0 && appData.budgetDay < 300){
            return('Низкий уровень дохода');
        } else{
            return('Что то пошло не так');
        }
    },
};

appData.asking();
console.log('Ваши месячные траты: ', appData.getExpensesMonth());
console.log(appData.expenses);
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getStatusIncome());

let message = "Наша программа включает в себя данные:\n ";
for (let key in appData) {
  message += key + ': ' + appData[key] + ';\n ';
}
console.log(message);