const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')
const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.textContent = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.textContent = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}
// ----------------TAB SLIDER-----------------------
const tabContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentIndex = 0;
let sliderInterval;

const hideTabContents = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const autoSlide = () => {
    hideTabContents();
    currentIndex = (currentIndex + 1) % tabContent.length;
    showTabContent(currentIndex);
};

hideTabContents();
showTabContent(currentIndex);

sliderInterval = setInterval(autoSlide, 3000);

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        clearInterval(sliderInterval);
        tabs.forEach((item, i) => {
            if (item === event.target) {
                hideTabContents();
                showTabContent(i);
                currentIndex = i;
                sliderInterval = setInterval(autoSlide, 3000);
            }
        });
    }
};


//-------------------------CONVERTER-----------------------
const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const converter = (element, target1, target2, isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/converter.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();

        request.onload = () => {
            const response = JSON.parse(request.response);
            const rateUSD = response.usd;
            const rateEuro = response.euro;

            if (isTrue) {
                target1.value = (element.value * rateUSD).toFixed(2);
                target2.value = (element.value * rateEuro).toFixed(2);
            } else {
                target1.value = (element.value / rateUSD).toFixed(2);
                target2.value = (element.value / rateEuro).toFixed(2);
            }

            if (element === usd) {
                target2.value = (element.value * (rateUSD / rateEuro)).toFixed(2);
            } else if (element === eur) {
                target1.value = (element.value * (rateUSD / rateEuro)).toFixed(2);
            }

            if (element.value === '') {
                target1.value = '';
                target2.value = '';
            }
        };
    };
};

converter(som, usd, eur, false);
converter(usd, som, eur, true);
converter(eur, som, usd, true);

//----------------------CARD SWITCHER--------------
const card = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
let count = 1;

const updateCard = (count) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
};
const changeCard = (increment) => {
    count += increment;
    if (count < 1) {
        count = 200;
    } else if (count > 200) {
        count = 1;
    }
    updateCard(count);
};

btnPrev.onclick = () => {
    changeCard(-1);
};

btnNext.onclick = () => {
    changeCard(1);
};
updateCard(count);



//вторая часть дз
const qwerty = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
};
qwerty();