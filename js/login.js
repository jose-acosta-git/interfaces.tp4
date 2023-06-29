"use strict";

const form = document.getElementById('form');
const btnSection = document.getElementById('btn-sections');
const errorMsg = document.createElement('p');
errorMsg.id = 'errorMsg';

let error = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    login();
});

function login() {
    let inputs = form.elements;
    if (inputs[0].value != "user@demo.com")
        return wrongUser();
    if (inputs[1].value != "1234")
        return wrongPassword();
    sessionStorage.setItem('isLogged', 'true');
    window.location.replace('donate.html');
}

function wrongUser() {
    errorMsg.innerHTML = "Usuario no registrado";
    if (!error)
        form.insertBefore(errorMsg, btnSection);
    error = true;
}

function wrongPassword() {
    errorMsg.innerHTML = "Contraseña incorrecta";
    if (!error)
        form.insertBefore(errorMsg, btnSection);
    error = true;
}