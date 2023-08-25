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
            if (isTrue) {
                target1.value = (element.value * response.usd).toFixed(2);
                target2.value = (element.value * response.euro).toFixed(2);
            } else {
                target1.value = (element.value / response.usd).toFixed(2);
                target2.value = (element.value / response.euro).toFixed(2);
            }


            if (element === usd) {
                target2.value = (element.value * (response.usd / response.euro)).toFixed(2);
            } else if (element === eur) {
                target1.value = (element.value * (response.usd / response.euro)).toFixed(2);
            }

            if (element.value === '') {
                target1.value = '';
                target2.value = '';
            }
        }
    }
}

converter(som, usd, eur, false);
converter(usd, som, eur, true);
converter(eur, som, usd, true);

//git


