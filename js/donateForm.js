const page1 = document.getElementById('page1');
const page1Btn = document.getElementById('page1-btn');
const page2 = document.getElementById('page2');
const backBtn = document.getElementById('back');
const donateBtn = document.getElementById('donate-button');
const customInput = document.getElementById('customInput');
const errorMsg = document.createElement('p');
errorMsg.id = 'errorMsg';
let error = false;

page1.addEventListener('submit', (e) => {
    e.preventDefault();
    nextPage();
})

page2.addEventListener('submit', (e) => e.preventDefault());

backBtn.addEventListener('click', previousPage);

donateBtn.addEventListener('click', () => {
    window.location.replace('index.html')
});

function nextPage() {
    if (page1.elements.donation.value == 'custom' && (customInput.value < 0 || customInput.value == "")) {
        return wrongValue();
    }
    page1.classList.remove('visible');
    page2.classList.add('visible');
}

function wrongValue() {
    errorMsg.innerHTML = "Ingrese un monto mayor a 0";
    if (!error)
        page1.insertBefore(errorMsg, page1Btn);
    error = true;
}

function previousPage() {
    page2.classList.remove('visible');
    page1.classList.add('visible');
}