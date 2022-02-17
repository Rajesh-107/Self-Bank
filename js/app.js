document.getElementById('calculate-btn').addEventListener('click', function() {
    const income = document.getElementById('income');
    const incomeInput = income.value;
    const incomeValue = parseFloat(incomeInput);
    document.getElementById('income').value = '';

    const food = document.getElementById('food').value;
    const foodValue = parseFloat(food);
    document.getElementById('food').value = '';
    // console.log(foodValue);
    const rent = document.getElementById('rent').value;
    const rentValue = parseFloat(rent);
    document.getElementById('rent').value = '';
    // console.log(rentValue);
    const clothes = document.getElementById('clothes').value;
    const clothesValue = parseFloat(clothes);
    document.getElementById('clothes').value = '';
    // console.log(clothesValue);

    const totalExpenses = foodValue + rentValue + clothesValue;
    const expenses = document.getElementById('expenses');
    expenses.innerText = totalExpenses;


    const balance = incomeValue - totalExpenses;
    const balanceValue = document.getElementById('balance');
    balanceValue.innerText = balance;

})

function errorMessage() {
    const error = document.getElementById('income-error');
    if (isNaN(document.getElementById('income').value)) {
        error.textContent = 'Please input vaild number';
    } else {
        error.textContent = '';
    }
}


document.getElementById('save').addEventListener('click', function() {

    const income = document.getElementById('income');
    const incomeInput = income.value;
    // const incomeValue = parseFloat(incomeInput);

    const saveInput = document.getElementById('save-input');
    const saveValue = saveInput.value;
    const savingAmount = parseFloat(incomeInput / 100) * saveValue;
    const saveTotal = document.getElementById('saving-amount');
    saveTotal.innerText = savingAmount;

    const remaining = document.getElementById('remaining');
    const balance = document.getElementById('balance').innerText;

    const remainingAmount = parseFloat(balance - savingAmount);
    remaining.innerText = remainingAmount;
    // document.getElementById('remaining').value;

    // console.log('click', remaining);
})