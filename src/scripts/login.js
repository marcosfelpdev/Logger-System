const userName = document.querySelector("#username-login");
const userPassword = document.querySelector("#password-login");
const showPassword = document.querySelector("#checkbox-login");
const btnLogin = document.querySelector("#button-login");

btnLogin.addEventListener('click', (e)=>{
    const userNameValue = userName.value;
    const userPasswordValue = userPassword.value;

    if(userNameValue === '' || userPasswordValue === ''){
        e.preventDefault();
        alert('Please fill in all the fields');
        return
    };
});