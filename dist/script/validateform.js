
function validateForm(form) {
    'use strict';

    // Regular expression for email validation as per HTML specification
    //const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
    const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const inputs = form.querySelectorAll('input');
    const buttonLogin = document.querySelector('#login');
    let valid = false;


    // Check if the name is valid
    const isValidName = (name) => {
        return name.value.length > 1;
    };
    const handleInputName = (target) => {

        if (isValidName(target)) {
            target.nextElementSibling.textContent = '';
            valid = true;
        }
        else {
            target.nextElementSibling.textContent = 'Name must be at least 2 characters';
            valid = false;
        }
    };

    // Check if the email is valid
    const isValidPassword = (target) => {
        return target.value.length !== 0 && passwordRegExp.test(target.value);
    };
    const handleInputPassword = (target) => {

        if (isValidPassword(target)) {
            target.nextElementSibling.textContent = '';
            target.setCustomValidity('');
            valid = true;
        }
        else {
            target.setCustomValidity('invalid');
            valid = false;
            if (target.value.length < 8){
                target.nextElementSibling.textContent = 'Has minimum 8 characters in length.';
            }
            else {
                target.nextElementSibling.textContent = 'At least one uppercase, one lowercase letter, one special character';
            }
        }
    };

    const handleInput = (event) => {

        switch (event.target.name) {
            case 'name':
                handleInputName(event.target);
                break;
            case 'psw':
                handleInputPassword(event.target);
                break;
        }
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();


        if (form.checkValidity() && valid) {

            form.classList.add('zoom-out-animate');

            setTimeout(() => {
                //setButtonTitle('Your message send successfully!');
                form.reset();
                form.classList.remove('zoom-out-animate');
                form.parentElement.style.display = "none";
                buttonLogin.textContent = 'Logout';
            }, 600);

        }
    };
    // Form Entry point
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.addEventListener("input", handleInput);
    }

    form.addEventListener("submit", handleSubmit);
}