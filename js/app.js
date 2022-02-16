// const income = document.getElementById('income').addEventListener('click', function() {
//     const incomeValue = income.value;
// })
const calculateButton = document.getElementById('calculate-btn').addEventListener('click', function() {
    const income = document.getElementById('income').value;
    const incomeValue = parseFloat(income);
    document.getElementById('income').value = '';
    // console.log(incomeValue);
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
    // console.log(clothesValue);

    const totalExpensesAmount = foodValue + rentValue + clothesValue;
    const totalExpenses = parseFloat(totalExpensesAmount);
    // console.log(totalAmount);
    const totalIncome = incomeValue - totalExpenses;
    const totalIncomeNumber = parseFloat(totalIncome);
    // console.log(totalIncome);
    // total expanses
    document.getElementById('expenses').innerText = totalIncomeNumber;


    // total balance
    const currentBalance = document.getElementById('balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = incomeValue - totalIncomeNumber;

    document.getElementById('balance').innerText = totalBalance;
})