const cardsContainer = document.querySelector('.cards-container');
const fetchCards = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data)
        data.forEach(cardData => {
            const card = createCard(cardData);
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Произошла ошибка при получении данных:", error);
    }
};

const createCard = (cardData) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = 'https://img.asmedia.epimg.net/resizer/q3OQ7gbpMSEGC5vfWsNLtfiiKJI=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/FJ54C73VRJMUZCAXXU7B6RKYNM.jpg'; // Замените на путь к изображению
    image.alt = 'Card Image';
    card.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = cardData.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = cardData.body;
    card.appendChild(description);

    return card;
};

fetchCards();