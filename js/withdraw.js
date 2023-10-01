
// withdraw 

document.getElementById('btn-withdraw').addEventListener('click', function() {
   // step-2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if(isNaN(newWithdrawAmount)) {
        alert('provide number');
        return;
    }

    // previous withdraw

    const previousWithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = previousWithdrawTotalElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawTotalString);
    
   //total withdraw 
   const totalWithdraw = previousWithdraw + newWithdrawAmount;
    // remaining balance calculation
    previousWithdrawTotalElement.innerText = totalWithdraw;


    //previous balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalElementString);

    withdrawField.value = '';

    if ( totalWithdraw > balanceTotal) {
        alert('tor baaper  balance e eto taka nai. ')
        return;
    }

    // now remaining balance 

    const remainingBalance = balanceTotal - totalWithdraw;
    balanceTotalElement.innerText = remainingBalance;

    



  
   
    



    
})