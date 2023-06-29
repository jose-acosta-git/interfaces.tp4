"use strict";

const userText = document.getElementById('userState');
const accountBtn = document.getElementById('accountBtn');
const userIcon = document.getElementById('userIcon');

let logged = sessionStorage.getItem('isLogged');
if (logged == null)
    sessionStorage.setItem('isLogged', 'false');
if (logged == 'true') {
    userText.textContent = "Cerrar sesión";
    userIcon.src = 'images/logout.png';
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