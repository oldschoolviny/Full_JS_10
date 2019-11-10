'use strict';

let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    accumalatedMonthValue = document.getElementsByClassName('accumalated_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional-expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    rangePeriod = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');


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
                
        if (salaryAmount.value === ''){
            start.style.display = 'block';
            return;
        }
    
        appData.budget = +salaryAmount.value;  

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getIncomeMonth();
        appData.getBudget();

        appData.showResult();
        appData.blocked();
        
        },
        blocked: function(){
            document.querySelectorAll('.data input[type=text]').forEach(function(item){
                item.disabled = true;
            });
            start.style.display = 'none';
            cancel.style.display = 'block';
        },
        showResult: function(){
            budgetMonthValue.value = this.budgetMonth;
            budgetDayValue.value = Math.ceil(this.budgetDay);
            expensesMonthValue.value = this.expensesMonth;
            additionalExpensesValue.value = this.addExpenses.join(', ');
            additionalIncomeValue.value = this.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(this.getTargetMonth());
            incomePeriodValue.value = this.calcPeriod();
            periodAmount.value = this.chagePeriod();

            periodSelect.addEventListener('change', function(){
                incomePeriodValue.value = appData.calcPeriod();
            });

        },
        addExpensesBlock: function(){
            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
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
        getExpenses: function(){
            let self = this;
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if(itemExpenses !== '' && cashExpenses !== ''){
                    self.expenses[itemExpenses] = cashExpenses;
                }
            });

        },
        chagePeriod: function(){
            // Display the default slider value
            periodAmount.innerHTML = rangePeriod.value;

            // Update the current slider value (each time you drag the slider handle)
            rangePeriod.oninput = function(){
                periodAmount.innerHTML = this.value;
            };
        },
        getIncome: function(){
            let self = this;
            incomeItems.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                    self.income[itemIncome] = cashIncome;
                }
            });
        },
        getAddExpenses: function(){
            let self = this;
            let addExpenses = additionalExpensesItem.value.split(',');
            addExpenses.forEach(function(item){
                item = item.trim();
                if(item !== ''){
                    self.addExpenses.push(item);
                }

            });
        },
        getAddIncome: function(){
            let self = this;
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if(itemValue !== ''){
                    self.addIncome.push(itemValue);
                }
            });
        },
    getInfoDeposit: function(){
        this.deposit = confirm('Есть ли у вас депозит в банке?');
        if(this.deposit){  
            this.percentDeposit = prompt("Какой годовой процент?", '10');
            this.moneyDeposit = +prompt("Какая сумма залодена?", 10000);
        }
    },
    getExpensesMonth: function(){
       for(let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
       }
    },
    getIncomeMonth: function(){
        for(let key in this.income){
            this.incomeMonth += +this.income[key];
        }
    },
    getBudget: function(){
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = this.budgetMonth / 30;
},
    getTargetMonth: function(){
        return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: function(){
        if (this.budgetDay >= 800){
            return('Высокий уровень дохода');
        } else if(this.budgetDay >= 300 && this.budgetDay < 800){
            return('Средний уровень дохода');
        } else if(this.budgetDay >= 0 && this.budgetDay < 300){
            return('Низкий уровень дохода');
        } else{
            return('Что то пошло не так');
        }
    },
    calcPeriod: function(){
        return this.budgetMonth * periodSelect.value;
    },
    reset: function(){
        document.querySelectorAll('input[type=text]').forEach(function(item) {
            item.value = '';
        });
        rangePeriod.value = 1;
        appData.chagePeriod();

        let inputs = document.querySelectorAll('input[type=text]');
            for (let i = 0; i < 11; i++) {
                inputs[i].disabled = false;
            }

        start.style.display = 'block';
        cancel.style.display = 'none';

        incomeItems[1].remove();
        incomeItems[2].remove();
        incomePlus.style.display = 'block';

        expensesItems[1].remove();
        expensesItems[2].remove();
        expensesPlus.style.display = 'block';

    
    },
};



start.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
rangePeriod.addEventListener('chage', appData.chagePeriod);
cancel.addEventListener('click', appData.reset);
