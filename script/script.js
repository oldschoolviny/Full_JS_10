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
    expensesTitle = document.querySelector('input.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpenses = document.querySelector('.additional-expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    rangePeriod = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');


const AppData = function(){
    this.budgetDay = 0;
    this.budget = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
};

AppData.prototype.check = function(){
    if (salaryAmount.value !== ''){
        start.removeAttribute('disabled');
    }
};

AppData.prototype.start = function(){
    if (salaryAmount.value === ''){
        start.setAttribute('disabled', 'true');
        return;
    }
    let allInput = document.querySelectorAll('.data input[type = text');
    allInput.forEach(function(item){
        item.setAttribute('disabled', 'true');
    });
    btnPlus[0].setAttribute('disabled', 'true');
    btnPlus[1].setAttribute('disabled', 'true');
    start.style.display = 'none';
    cancel.style.display = 'block';
    this.budget = +salaryAmount.value;  

    this.getExpInc();

    this.getInfoDeposit();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getIncomeMonth();
    this.getBudget();
    this.calcPeriod();

    this.showResult();
    this.blocked();
    };

AppData.prototype.blocked = function(){
    document.querySelectorAll('.data input[type=text]').forEach(function(item){
        item.disabled = true;
    });
    start.style.display = 'none';
    cancel.style.display = 'block';
};

AppData.prototype.showResult = function(){
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodAmount.value = this.chagePeriod();

    periodSelect.addEventListener('change', function(){
        incomePeriodValue.value = _this.calcPeriod();
    });

};

AppData.prototype.addExpensesBlock= function(){  
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
    }
};

AppData.prototype.addIncomeBlock = function(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if(incomeItems.length === 3){
        incomePlus.style.display = 'none';
    }
};

AppData.prototype.chagePeriod = function(){
    // Display the default slider value
    periodAmount.innerHTML = rangePeriod.value;

    // Update the current slider value (each time you drag the slider handle)
    rangePeriod.oninput = function(){
        periodAmount.innerHTML = this.value;
    };
};

AppData.prototype.getAddExpenses = function(){
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }

    });
};

AppData.prototype.getAddIncome = function(){
    const _this = this;
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){  
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
    }
};  

AppData.prototype.getExpensesMonth = function(){
    for(let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
    }
}; 

AppData.prototype.getIncomeMonth = function(){
    for(let key in this.income){
        this.incomeMonth += +this.income[key];
    }
}; 

AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
    this.budgetDay = this.budgetMonth / 30;
};

AppData.prototype.getTargetMonth =  function(){
    return targetAmount.value / this.budgetMonth;
};

AppData.prototype.getExpInc = function(){
    const count = item => {
        const startStr = item.className.split('-')[0];
        const itemTitle = item.querySelector(`.${startStr}-title`).value;
        const itemAmount = item.querySelector(`.${startStr}-amount`).value;
        if(itemTitle !== '' && itemAmount !== '') {
            this[startStr][itemTitle] = itemAmount;
        }
    }

    for(const key in this.income){
        this.incomeMonth += +this.income[key];
    }
    
    incomeItems.forEach(count);
    expensesItems.forEach(count);

};

AppData.prototype.getStatusIncome = function(){
    if (this.budgetDay >= 800){
        return('Высокий уровень дохода');
    } else if(this.budgetDay >= 300 && this.budgetDay < 800){
        return('Средний уровень дохода');
    } else if(this.budgetDay >= 0 && this.budgetDay < 300){
        return('Низкий уровень дохода');
    } else{
        return('Что то пошло не так');
    }
}; 

AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
};  

AppData.prototype.reset = function(){
    document.querySelectorAll('input[type=text]').forEach(function(item) {
        item.value = '';
    });
    rangePeriod.value = 1;
    appData.chagePeriod();

    let inputs = document.querySelectorAll('input[type=text]');
        for (let i = 0; i < inputs.length; i++) {
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
};

depositCheck.addEventListener('change', function(){
    if(depositCheck.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        AppData.deposit = 'true';
        depositBank.addEventListener('change', function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other'){
                depositPercent.style.display = 'inline-block';
                depositPercent.value = '';
            }else{
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }
        });
    }else{
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        AppData.deposit = 'false';
    }
});

AppData.prototype.eventsListeners = function() {
    start.addEventListener('click', appData.start.bind(appData));

    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
    rangePeriod.addEventListener('input', appData.chagePeriod);
    cancel.addEventListener('click', appData.reset);
};

const appData = new AppData();
AppData.prototype.eventsListeners();