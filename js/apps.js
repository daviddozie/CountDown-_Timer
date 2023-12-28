let ms = 0, s = 0, m = 0, h = 0
let timer;

const counter = document.querySelector('.rounded');

const startTimer = document.querySelector('#startTimer');
const pauseTimer = document.querySelector('#pauseTimer');
const resetTimer = document.querySelector('#resetTimer');
const restartTimer = document.querySelector('#restartTimer');

startTimer.addEventListener('click', () => {
    if(!timer) {
        timer = setInterval(run, 10);
    }
})

function run() {
    counter.innerHTML = getTimer();
    ms++
    if (ms == 100) {
        ms = 0
        s++
    }

    if (s == 60) {
        s = 0
        m++
    } 

    if (m == 60) {
        m = 0
        h++
    }
}

function getTimer() {
    return (
        (h < 10 ? "0" + h : h) + " : " +
        (m < 10 ? "0" + m : m) + " : " +
        (s < 10 ? "0" + s : s) + " : " +
        (ms < 10 ? "0" + ms : ms)
    );
}

pauseTimer.addEventListener('click', () => {
    stopTimer();
})

function stopTimer() {
    clearInterval(timer);
    timer = false
}

resetTimer.addEventListener('click', () => {
    stopTimer();
    ms = 0;
    m = 0;
    s = 0;
    h = 0;
    counter.innerHTML = getTimer();
})

restartTimer.addEventListener('click', () => {
    if(timer) {
        ms = 0;
        h = 0;
        m = 0;
        s = 0;
        resetTimer();
        startTimer();
    }
})