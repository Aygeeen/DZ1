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

// -----------------
const childBlock = document.querySelector('.child_block');
const childBlockWidth = 50;
const parentBlockWidth = 500;

function moveRight(position) {
    const maxPosition = parentBlockWidth - childBlockWidth;

    if (position >= maxPosition) {
        return;
    }

    childBlock.style.left = `${position}px`;
    setTimeout(() => {
        moveRight(position + 1);
    }, 1);
}

moveRight(0);