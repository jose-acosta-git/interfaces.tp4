"use strict";

const form = document.getElementById('form');
const btnSection = document.getElementById('btn-sections');
const errorMsg = document.createElement('p');
errorMsg.id = 'errorMsg';

let error = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    register();
});

function register() {
    let inputs = form.elements;
    if (inputs[1].value != inputs[2].value)
        return wrongPassword();
    window.location.replace('login.html');
}

function wrongPassword() {
    errorMsg.innerHTML = "Las contraseñas no coinciden";
    if (!error)
        form.insertBefore(errorMsg, btnSection);
    error = true;
}