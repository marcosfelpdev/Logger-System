const userName = document.querySelector("#username-login");
const userPassword = document.querySelector("#password-login");
const showPassword = document.querySelector("#checkbox-login");
const btnLogin = document.querySelector("#button-login");

const nameVerify = document.querySelector("#alert-name");
const passVerify = document.querySelector("#alert-pass");

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    const userNameValue = userName.value;
    const userPasswordValue = userPassword.value;

    if(userNameValue === '' && userPasswordValue === ''){
        e.preventDefault();
        userName.style.backgroundColor = "rgba(242, 56, 62, 0.421)";
        userPassword.style.backgroundColor = "rgba(242, 56, 62, 0.421)";
        nameVerify.textContent = "*Required field"
        passVerify.textContent = "*Required field"
        return
    };
    if(userNameValue === ''){
        e.preventDefault();
        userName.style.backgroundColor = "rgba(242, 56, 62, 0.421)";
        nameVerify.textContent = "*Required field"
        return
    }
    if(userPasswordValue === ''){
        e.preventDefault();
        userPassword.style.backgroundColor = "rgba(242, 56, 62, 0.421)";
        passVerify.textContent = "*Required field"
        return
    }

    const usernameSession = sessionStorage.getItem('userName');
    const userpasswordSession = sessionStorage.getItem('userPassword');

    if(userNameValue !== usernameSession || userPasswordValue !== userpasswordSession){
        alert('errou');
        return
    }

    window.location.href = './home.html'

});

showPassword.addEventListener('change', () =>{

    const type = userPassword.getAttribute('type');
    if(type !== 'password'){
        password.setAttribute('text','password');
        return
    }

    password.set
});


