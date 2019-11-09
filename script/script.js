'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('.budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('.budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('.expenses_month-value')[0],
    accumulatedMonthValeu = document.getElementsByClassName('.accumulated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('.additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('.additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('.income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('.target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('input.income-title'),
    incomeAmount = document.querySelector('input.income-amount'),
    expensesTitle = document.querySelector('input.expenses-title'),
    expensesAmount = document.querySelector('input.expenses-amount'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    rangePeriod = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    incomeItems = document.querySelectorAll('.income-items');


let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function(){

        if(salaryAmount.value === ''){
            alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
            return;
        }
        appData.budget = +salaryAmount.value;  

        // appData.getExpenses();

        // appData.asking();
        // // appData.getExpensesMonth();
        // appData.getBudget();

        appData.showResult();
    },
    addExpensesBlock: function(){
        console.log(expensesItems.parentNode);
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.appendChild(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function(){
        
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if(incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
            
    },
    asking: function(){
        if(confirm('Если у вас дополнительный зароботок?')){
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Фриланс' );
            while (itemIncome == '' || itemIncome == null || !isNaN(itemIncome)) {
                itemIncome = prompt('Каков ваш дополнительный заработок?', 'Фриланс');
              }
            let cashIncome;
            do{
            cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 1000);
        }
            while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
            
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы через запятую', "такси, газ, вода");
        appData.addExpenses = addExpenses.toLowerCase().split(', ');

        for (let i = 0; i < 2; i++){

            let itemExpenses = prompt("Введите обезательную статью расходов?", "Интернет");
            let cashExpenses;
            do{
                cashExpenses = prompt("Во сколько это обойдется?", 3500);
            }
            while(isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);

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
            return appData.budgetMonth;
        }
     

        function budgetDay(){
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            return appData.budgetDay;
        }
       

        function budgetPeriod(){
            appData.budgetPeriod = money * appData.period;
        }
      

        function expensesPeriod(){
            appData.expensesPeriod = appData.expensesMonth * appData.period;
        }


        function incomePeriod(){
            appData.accumalatiom = appData.budgetPeriod - appData.expensesPeriod;
            if(appData.accumalatiom > 0){
                console.log('Накоплено за период: ' + appData.accumalatiom);
            } else if(appData.accumalatiom <= 0){
                console.log('Ничего не накоплено, вы в минусе.');
            }
        }

        
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
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if(appData.deposit){
               
            appData.percentDeposit = prompt("Какой годовой процент?", '10');
            
            appData.moneyDeposit = +prompt("Какая сумма залодена?", 10000);
            
           
    }
},
    calcSaveMoney: function(){
        return appData.budgetMonth * appData.period;
    },
};


start.addEventListener('click', appData.start);
incomePlus.addEventListener('click', appData.addIncomeBlock);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

let outGoings = appData.addExpenses,
    outGoingsUpper = [];
for (let i = 0; i < outGoings.length; i++){
    outGoingsUpper[i] = ' ' + outGoings[i].charAt(0).toUpperCase() + outGoings[i].slice(1);
}
