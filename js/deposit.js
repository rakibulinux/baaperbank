//1. add event handler with the withdraw button
//2. get the withdraw amount from the withdraw input field
//2.5. Also make sure to convart the input to a number using parseFloat()
// 3. Get previous withdraw total
//4. Calculate total withdraw amount
//5. Set total withdraw amount
//6. Calculate total banalce
//6.5. Set new balance
//7/ clear input value


//Step-1
document.getElementById('btn-deposit').addEventListener('click', function(){

    //Step-2
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3
    const oldDepositAmount = document.getElementById('deposit-update');
    const previosDepositTotalString = oldDepositAmount.innerText;
    const previosDepositTotal = parseFloat(previosDepositTotalString);
    //step-4
    const currentDepositAmount = previosDepositTotal + newDepositAmount;
    oldDepositAmount.innerText = currentDepositAmount;


    //Step-5: Total Amount Add
    const updateTotal = document.getElementById('update-total');
    const previusTotalString = updateTotal.innerText;
    const previusTotal = parseFloat(previusTotalString);
    
    //Step-6
    const newTotalAmount = previusTotal + newDepositAmount;
    updateTotal.innerText = newTotalAmount;
    //Step-7: Clear value
    depositInput.value = '';
})