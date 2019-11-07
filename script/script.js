'use strict';

let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional-income'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('.budget_day-value'),
    budgetMonthValue = document.getElementsByClassName('.budget_month-value'),
    expensesMonthValue = document.getElementsByClassName('.expenses_month-value'),
    accumalatedMonthValue = document.getElementsByClassName('.accumalated_month-value'),
    additionalIncomeValue = document.getElementsByClassName('.additional_income-item'),
    additionalExpensesValue = document.getElementsByClassName('.additional_expenses-item'),
    incomePeriodValue = document.getElementsByClassName('.income_period-value'),
    targetMonthValue = document.getElementsByClassName('.target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional-expenses'),
    periodSelect = document.querySelector('.period-select');


let appData = {
    budget: 0,
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    percentDeposit: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){

        start = function(){
                appData.budgetMonth = salaryAmount.nodeValue;  

                // appData.asking();
                // appData.getExpensesMonth();
                // appData.getBudget();
        };

        if(confirm('Если у вас дополнительный зароботок?')){
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Фриланс' );
            while (itemIncome == '' || itemIncome == null || !isNaN(itemIncome)) {
                itemIncome = prompt('Каков ваш дополнительный заработок?', 'Фриланс');
              }
            let cashIncome;
            do{
            cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
        }
            while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null)
            
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы через запятую', "такси, газ, вода");
        appData.addExpenses = addExpenses.toLowerCase().split(', ');
        console.log(appData.addExpenses);
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++){

            let itemExpenses = prompt("Введите обезательную статью расходов?", "Интернет");
            let cashExpenses;
            do{
                cashExpenses = prompt("Во сколько это обойдется?", 3500);
            }
            while(isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null)

            appData.expenses[itemExpenses] = cashExpenses;
        }
    },
    getExpensesMonth: function(){
       for(let key in appData.expenses){
           appData.expensesMonth += +appData.expenses[key];
       }
         return appData.expensesMonth; // мой костыль, не пойму почему без него не работает
    },
    getBudget: function(){
        function budgetMonth(){
            appData.budgetMonth = appData.budget - appData.expensesMonth;
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
            appData.expensesPeriod = appData.expensesMonth * appData.period;
        }
        expensesPeriod();

        function incomePeriod(){
            appData.accumalatiom = appData.budgetPeriod - appData.expensesPeriod;
            if(appData.accumalatiom > 0){
                console.log('Накоплено за период: ' + appData.accumalatiom);
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
            console.log('Цель не будет достигнута');  // уже работает
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

    getInfoDeposit: function(){
        if(appData.deposit){
               
            appData.percentDeposit = prompt("Какой годовой процент?", '10');
            
            appData.moneyDeposit = +prompt("Какая сумма залодена?", 10000);
            
           
    }
},
    calcSaveMoney: function(){
        return appData.budgetMonth * appData.period;
    },
};


let message = "Наша программа включает в себя данные:\n ";
for (let key in appData) {
  message += key + ': ' + appData[key] + ';\n ';
}

start.addEventListener('click', appData.start);


let outGoings = appData.addExpenses,
    outGoingsUpper = [];
for (let i = 0; i < outGoings.length; i++){
    outGoingsUpper[i] = ' ' + outGoings[i].charAt(0).toUpperCase() + outGoings[i].slice(1);
}
