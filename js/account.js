"use strict";

const userText = document.getElementById('userState');
const accountBtn = document.getElementById('accountBtn');

let logged = sessionStorage.getItem('isLogged');
console.log(logged);
if (logged == null)
    sessionStorage.setItem('isLogged', 'false');
if (logged == 'true') {
    userText.textContent = "Cerrar sesión";
}

accountBtn.addEventListener('click', (e) => {
    e.preventDefault();
    redirect();
})

function redirect() {
    if (logged == 'true') {
        sessionStorage.setItem('isLogged', 'false');
        window.location.replace('index.html');
    } else {
        window.location.replace('register.html');
    }
}