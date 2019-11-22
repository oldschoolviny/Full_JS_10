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


class AppData {  //class + constructor
    constructor(budget = 0, budgetDay = 0, budgetMonth = 0, income = {}, 
        incomeMonth = 0, addIncome = [], expenses = {}, expensesMonth = 0, addExpenses = [],
        deposit = false, percentDeposit = 0, moneyDeposit = 0){
            this.budget = budget;
            this.budgetDay = budgetDay;
            this.budgetMonth = budgetMonth;
            this.income = income;
            this.incomeMonth = incomeMonth;
            this.addIncome = addIncome;
            this.expenses = expenses;
            this.expensesMonth = expensesMonth;
            this.addExpenses = addExpenses;
            this.deposit = deposit;
            this.percentDeposit = percentDeposit;
            this.moneyDeposit = moneyDeposit;
        }
}

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
    allInput.forEach(item => {
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
    this.getAddIncomeOrExpenses();
    // this.getAddExpenses();
    // this.getAddIncome();
    this.getIncomeMonth();
    this.getBudget();
    this.calcPeriod();

    this.showResult();
    this.blocked();
    };

AppData.prototype.blocked = function(){
    document.querySelectorAll('.data input[type=text]').forEach(item => {
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

    periodSelect.addEventListener('change', () => {
        incomePeriodValue.value = _this.calcPeriod();
    });

};

AppData.prototype.addBlock = (item, button) => { // принимает два аргумента (блок для глубокого клонирования и кнопку)
    const cloneItem = item[0].cloneNode(true); // создаём локальную переменную для глубокого (true) клонирования
    item[0].parentNode.insertBefore(cloneItem, button); /* добавляем клонированный элемент и кнопку после родительского узла */
    const itemClass = item[0].className; //получаем класс поля, переданного в качестве аргумента
    item = document.getElementsByClassName(itemClass); //ищем все элементы с таким классом на странице
    if (item.length === 3) { // если таких элементов 3 штуки
        button.style.display = 'none'; // удаляем кнопку "плюс"
    }
};

// AppData.prototype.addExpensesBlock= function(){  
//     let cloneExpensesItem = expensesItems[0].cloneNode(true);
//     expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
//     expensesItems = document.querySelectorAll('.expenses-items');
//     if(expensesItems.length === 3){
//         expensesPlus.style.display = 'none';
//     }
// };

// AppData.prototype.addIncomeBlock = function(){
//     let cloneIncomeItem = incomeItems[0].cloneNode(true);
//     incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
//     incomeItems = document.querySelectorAll('.income-items');
//     if(incomeItems.length === 3){
//         incomePlus.style.display = 'none';
//     }
// };

AppData.prototype.chagePeriod = function(){
    // Display the default slider value
    periodAmount.innerHTML = rangePeriod.value;

    // Update the current slider value (each time you drag the slider handle)
    rangePeriod.oninput = function(){
        periodAmount.innerHTML = this.value;
    };
};

AppData.prototype.getAddIncomeOrExpenses  = function(){
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item =>{
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }

    });

    additionalIncomeItem.forEach(item => {
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};

// AppData.prototype.getAddExpenses = function(){
//     const _this = this;
//     let addExpenses = additionalExpensesItem.value.split(',');
//     addExpenses.forEach(function(item){
//         item = item.trim();
//         if(item !== ''){
//             _this.addExpenses.push(item);
//         }

//     });
// };

// AppData.prototype.getAddIncome = function(){
//     const _this = this;
//     additionalIncomeItem.forEach(function(item){
//         let itemValue = item.value.trim();
//         if(itemValue !== ''){
//             _this.addIncome.push(itemValue);
//         }
//     });
// };

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
    }; 
    }

AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
    this.budgetDay = Math.ceil(Math.floor(this.budgetMonth / 30));
};

AppData.prototype.getTargetMonth = function(){
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

    appData.budget = 0;
    appData.budgetDay = 0;
    appData.budgetMonth = 0;
    appData.income = {};
    appData.incomeMonth = 0;
    appData.addIncome = [];
    appData.expenses = {};
    appData.expensesMonth = 0;
    appData.addExpenses = [];
    appData.deposit = false;
    appData.percentDeposit = 0;
    appData.moneyDeposit = 0;

    document.querySelectorAll('input[type=text]').forEach(item => {
        item.value = '';
    });
    rangePeriod.value = 1;
    appData.chagePeriod();


    depositCheck.remove();
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositAmount.value = '';
    AppData.deposit = 'false';

    
    let inputs = document.querySelectorAll('input[type=text]');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }

    start.style.display = 'block';
    cancel.style.display = 'none';

    let removeElem = '';
    const quantityIncomes = document.querySelectorAll('.income-items').length - 2;
    let rIt = quantityIncomes;
    for(let i = 0; i <= quantityIncomes; i++){
        rIt = document.querySelectorAll('.income-items').length;
        removeElem = document.querySelectorAll('.income-items')[rIt - 1];
        removeElem.remove();
    }

    const quantityExpenses = document.querySelectorAll('.expenses-items').length - 2;
    let rEt = quantityExpenses;
    for(let i =0; i <= quantityExpenses; i++){
        rEt = document.querySelectorAll('.expenses-items').length;
        removeElem = document.querySelectorAll('.expenses-items')[rEt - 1];
        removeElem.remove();
    }

    incomePlus.style.display = 'block';
    expensesPlus.style.display = 'block';
    incomePlus.removeAttribute("disable");
    expensesPlus.removeAttribute("disable");

    // cloneItem[].remove();
    // itemClass[].remove();
    // button.style.display = 'block';
    // appData.incomePlus.style.display = 'block';
    
    // incomeItems[].remove();
    // incomeItems[].remove();
    // incomePlus.style.display = 'block';

    // expensesItems[1].remove();
    // expensesItems[2].remove();
    // expensesPlus.style.display = 'block';
    // const inputs = document.querySelectorAll('input[type=tex]');
    // for(let i = 0; i < inputs.length; i++){
    //     inputs[i].removeAttribute("disabled", false);
    //     inputs[i].value = '';
    // }

    // cancel.style.display = 'none';
    // start.style.display = 'block';
    // appData.addIncomeValue.value = '';
    // appData.addIncome = [];
    // appData.income = {};
    // appData.incomeMonth = 0;
    // periodSelect.setAttribute('disabled', true);

};

depositCheck.addEventListener('change', () => {
    if(depositCheck.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        AppData.deposit = 'true';
        depositBank.addEventListener('change', function(){  // тут ошибку выдает если меняю по ЕС6 стандарту
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

    expensesPlus.addEventListener('click', () => {
        appData.addBlock(expensesItems, expensesPlus);
    });
    incomePlus.addEventListener('click', () =>{
        appData.addBlock(incomeItems, incomePlus);
    }); 
    // expensesPlus.addEventListener('click', appData.addExpensesBlock);
    // incomePlus.addEventListener('click', appData.addIncomeBlock);
    rangePeriod.addEventListener('input', appData.chagePeriod);
    cancel.addEventListener('click', appData.reset);
};

const appData = new AppData();
AppData.prototype.eventsListeners();