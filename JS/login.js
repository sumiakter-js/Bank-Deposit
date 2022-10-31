//check login js file: console.log('Login file JS');
//step-1: add click event handle with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input
    //always remeber to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //console.log(email);
    //step-3: get password
    //step-3.1: setid on the html element
    //step-3.2: get the element
    //step-3.3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email, password);

    //DANGER: Do Not Verify email password on the client side

    //step-4: verify email and password
    if(email == 'sontan@bap.com' && password == 'secrate'){
        //console.log('valid password');
        //add another page
        window.location.href = 'bank.html'
    }
    else{
        //console.log('invalid user');
        alert('toke tejjo sontan korlam password vule gecis')
    }
})