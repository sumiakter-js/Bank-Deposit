/**
 * 1. add event handler with the withdraw button  
 * 
 * 2. get the withdraw amount from the withdraw input field
 * *2.1 also makesure to convert the input into a number by using parseFloat 
 * 
 * 3. get previous withdraw total
 * 
 * 4. calculatetotal amount
 * 
 *4. 5. set total withdraw amount
 * 5. get the previous balance total
 * 
 * 6. calculate new balance total
 * 6.5: set the new balance total
 * 7. clear the input field
 * **/
//step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //check
    //console.log('withdraw button clicked');
    //step-2:
    const withdawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //console.log(newWithdrawAmount);

    //step-7: clear the input field
    withdawField.value = '';
    
    //isNan hanlde for blank field
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    //step: withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //console.log(previousWithdrawTotal);    

     //step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBalanceTotal);

    //set aleart

    if(newWithdrawAmount > previousBalanceTotal){
        alert('tk nai');
        return;
    }
    //step-4: calculate total amount
 const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
 //step-4-5: set total withdraw amount
 withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate new balance total
    const newBlanceTotal = previousBalanceTotal - newWithdrawAmount;

    //step-6.5: set the new balance total
    balanceTotalElement.innerText = newBlanceTotal;
    
})