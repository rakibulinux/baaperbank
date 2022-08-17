document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmountElement = document.getElementById('withdraw-input');
    const withdrawAmountString = withdrawAmountElement.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    console.log(withdrawAmount);

    //Step-7
    withdrawAmountElement.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please provide a number');
        return;
    }

    const previusWithdrawElement = document.getElementById('withdraw-update');
    const previusWithdrawString = previusWithdrawElement.innerText;
    const previusWithdraw = parseFloat(previusWithdrawString);

    const totalWithdraw = withdrawAmount + previusWithdraw;
    previusWithdrawElement.innerText = totalWithdraw;

    //Devision previsu amount
    const currentTotalAmountValue = document.getElementById('update-total');
    const currentTotalAmountString = currentTotalAmountValue.innerText;
    const currentTotalAmount = parseFloat(currentTotalAmountString);

    if( withdrawAmount > currentTotalAmount){
        alert('Bap er bank e tk nai');
        return;
    }
    const totalCurrentAmount = currentTotalAmount - withdrawAmount;
    currentTotalAmountValue.innerText = totalCurrentAmount;
})