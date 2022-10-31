//check linking file: console.log('btn-deposit.js)
//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
   // console.log('click deposite button')
   //step-2: get the deposite amount from the deposit input field
   //For getfield use .value to the value inside the input field
   const depositField = document.getElementById('deposit-field');
   const newDepositAmountString = depositField.value;
   //convert string to number use of the parseFloat
   const newDepositAmount = parseFloat(newDepositAmountString);
      //check input value type: console.log(typeof newDepositAmount);


   //console.log(depositAmount);
   //step-3: get the current deposit total amount
   //for non-input(element other than input, textarea) use innerText to get thetext
   const depositTotalElement = document.getElementById('deposit-total');
   const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)
  console.log(previousDepositTotal);

  //step-4: add numbers to set the total deposit
   const currentDepositTotal = previousDepositTotal +  newDepositAmount;
   //set the deposite total
   depositTotalElement.innerText = currentDepositTotal;

   //step-5: get balance currenttotal
   const balanceTotalElement = document.getElementById('balance-total');
   const previousBalanceTotalString = balanceTotalElement.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   
   //step-6: Calculate current total balance
   const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
   //set the balance total
   balanceTotalElement.innerText = currentBalanceTotal;

   //step-7: clear the depositfield
   depositField.value = '';

})