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





