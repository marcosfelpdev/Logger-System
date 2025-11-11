const heading = document.querySelector("#heading");
const uname = sessionStorage.getItem('userName');

heading.textContent = `Hello, ${uname}!`
