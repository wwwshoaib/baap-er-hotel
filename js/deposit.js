// Add event handler Listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Get the current/existing deposit total
    // for input (element other than input, textarea), use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDeposit = parseFloat(previousDepositTotalString);
    const currentDeposit = newDepositAmount + previousDeposit;
    depositTotalElement.innerText = currentDeposit;
    // update (total) balance calculation
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);
    const currentBalanceTotal = currentDeposit + balanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // step-7: clear the deposit input
    depositField.value = '';
    
})