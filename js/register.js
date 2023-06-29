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
    if (!validateEmail(inputs[0].value))
        return invalidEmail();
    if (inputs[1].value.length < 3 || inputs[2].value.length < 3)
        return invalidPassword();
    if (inputs[1].value != inputs[2].value)
        return wrongPassword();
    window.location.replace('login.html');
}

function invalidPassword() {
    errorMsg.innerHTML = "Ingrese una contraseña de al menos 4 caracteres";
    if (!error)
        form.insertBefore(errorMsg, btnSection);
    error = true;
}

function invalidEmail() {
    errorMsg.innerHTML = "Inserte un email válido";
    if (!error)
        form.insertBefore(errorMsg, btnSection);
    error = true;
}

function wrongPassword() {
    errorMsg.innerHTML = "Las contraseñas no coinciden";
    if (!error)
        form.insertBefore(errorMsg, btnSection);
    error = true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}