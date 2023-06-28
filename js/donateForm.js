const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

page1.addEventListener('submit', (e) => {
    e.preventDefault();
    nextPage();
})

page2.addEventListener('submit', (e) => {
    e.preventDefault();
    previousPage();
})

function nextPage() {
    page1.classList.remove('visible');
    page2.classList.add('visible');
}

function previousPage() {
    page2.classList.remove('visible');
    page1.classList.add('visible');
}