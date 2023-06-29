"use strict";

const btn = document.getElementById('donate-btn');

btn.addEventListener('click', checkLogged);

function checkLogged() {
    if (sessionStorage.getItem('isLogged') == 'true')
        window.location.replace('donate.html');
    else
        window.location.replace('register.html');
}