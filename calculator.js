const display = document.getElementById('display');
const themeToggle = document.getElementById('theme-toggle');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value.replace('sqrt', 'Math.sqrt'));
    } catch (error) {
        display.value = 'Error';
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
