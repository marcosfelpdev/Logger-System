const userName = document.querySelector("#username-register");
const userPassword = document.querySelector("#password-register");
const userPasswordConfirmation = document.querySelector("#confirm-password-register");
const showPassword = document.querySelector("#checkbox-register");
const btnregister = document.querySelector("#button-register");

btnregister.addEventListener('click', () => {
    const userNameValue = userName.value;
    const userPasswordValue = userPassword.value;
    const passwordConfirm = userPasswordConfirmation.value;

    if(userNameValue === "" || userPasswordValue === "" || passwordConfirm === ""){
        event.preventDefault();
        alert('Please fill in all the fields');
        return;
    } 

    sessionStorage.setItem('userName',  userNameValue);
    sessionStorage.setItem('userPassword', userPasswordValue);
    sessionStorage.setItem('userPasswordConfirmation',  passwordConfirm);
});