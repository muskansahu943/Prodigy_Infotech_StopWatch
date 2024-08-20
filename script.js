let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const minDisplay = document.getElementById('minutes');
const secDisplay = document.getElementById('seconds');
const msDisplay = document.getElementById('milliseconds');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    minDisplay.textContent = String(minutes).padStart(2, '0');
    secDisplay.textContent = String(seconds).padStart(2, '0');
    msDisplay.textContent = String(milliseconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        milliseconds++;
        if (milliseconds >= 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
