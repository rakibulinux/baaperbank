// 1st step: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input field
    //Always remember to use .value to get text from an input field
    const emailField = document.getElementById('email-id');
    const email = emailField.value;
    console.log(email);
    //Step 3: get password
    //3.a: set id on the html element
    //3.b: get the element
    //3.c: get the value from the element
    const passwordField = document.getElementById('password-type');
    const password = passwordField.value;
    console.log(password);
    //DANGER: DO Not Verify email password for client side:
    //step-4: verify email password for testing.
    if(email === 'rakibulinux@gmail.com' && password === 'rakib@secret'){
        window.location.href = 'bank.html'
    }
    else{
        console.log('Invalid User')
    }
    
})