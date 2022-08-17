document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmountElement = document.getElementById('withdraw-input');
    const withdrawAmountString = withdrawAmountElement.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    console.log(withdrawAmount);

    const previusWithdrawElement = document.getElementById('withdraw-update');
    const previusWithdrawString = previusWithdrawElement.innerText;
    const previusWithdraw = parseFloat(previusWithdrawString);

    const totalWithdraw = withdrawAmount + previusWithdraw;
    previusWithdrawElement.innerText = totalWithdraw;
    withdrawAmountElement.value = '';

    //Devision previsu amount
    const currentTotalAmountValue = document.getElementById('update-total');
    const currentTotalAmountString = currentTotalAmountValue.innerText;
    const currentTotalAmount = parseFloat(currentTotalAmountString);

    const totalCurrentAmount = currentTotalAmount - withdrawAmount;
    currentTotalAmountValue.innerText = totalCurrentAmount;
})