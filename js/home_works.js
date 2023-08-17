// -------------GMAIL--------------
const emailRegexp = /^[a-zA-Z\d._+-]+@gmail\.com$/
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
gmailButton.addEventListener('click', () => {
    const inputValue = gmailInput.value
    if (inputValue.match(emailRegexp)) {
        gmailResult.textContent = 'Valid Gmail address'
        gmailResult.style.color = 'green'
    } else if (inputValue.trim() === '') {
        gmailResult.textContent = 'Please enter an email address';
        gmailResult.style.color = 'orange';
    } else {
        gmailResult.textContent = 'Invalid Gmail address'
        gmailResult.style.color = 'red'
    }
})

// --------MOVE-BLOCK-----------
const childBlock = document.querySelector('.child_block');
let positionX = 0
let positionY = 0
const move = () => {
    if (positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 448 && positionY < 448) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionX > 0 && positionY >= 448) {
        positionX--
        childBlock.style.left = `${positionX}px`;
        setTimeout(move, 1)
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()

// -------TIMER------------

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const mlSecondsElement = document.getElementById('ml-seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resumeButton = document.getElementById('resume');
const resetButton = document.getElementById('reset');

let intervalId;
let minutes = 0;
let seconds = 0;
let mlSeconds = 0;
let isRunning = false;
let wasStopped = false

function updateTimer() {
    if (isRunning) {
        mlSeconds++;
        if (mlSeconds >= 100) {
            mlSeconds = 0;
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
        }
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        mlSecondsElement.textContent = mlSeconds.toString().padStart(2, '0');
    }
}
function startTimer() {
    if (!isRunning && !wasStopped) {
        intervalId = setInterval(updateTimer, 10);
        isRunning = true;
        startButton.disabled = true;
        stopButton.disabled = false;
        resumeButton.disabled = true;
    }
}
function stopTimer() {
    clearInterval(intervalId);
    isRunning = false;
    wasStopped = true;
    startButton.disabled = false;
    stopButton.disabled = true;
    resumeButton.disabled = false;
}
function resumeTimer() {
    if (!isRunning && intervalId) {
        intervalId = setInterval(updateTimer, 10);
        isRunning = true;
        wasStopped = false;
        startButton.disabled = true;
        stopButton.disabled = false;
        resumeButton.disabled = true;
    }
}
function resetTimer() {
    clearInterval(intervalId);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    mlSeconds = 0;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    mlSecondsElement.textContent = '00';
    updateTimer();
    wasStopped = false;
    startButton.disabled = false;
    stopButton.disabled = true;
    resumeButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resumeButton.addEventListener('click', resumeTimer);
resetButton.addEventListener('click', resetTimer);



