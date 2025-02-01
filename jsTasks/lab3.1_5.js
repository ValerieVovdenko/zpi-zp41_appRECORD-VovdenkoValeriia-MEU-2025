//Завдання №5
let images = [
    './img/slide_1.png',
    './img/slide_2.png',
    './img/slide_3.png',
];
const form = document.getElementById('form');
const imageElement = document.getElementById('slideshow');
let currentIndex = 0;
let timer = null;

function start() {
    const width = form.elements['width'].value;
    const height = form.elements['height'].value;
    const interval = form.elements['interval'].value;

    // Встановлюємо розміри зображення
    imageElement.style.width = `${width}px`;
    imageElement.style.height = `${height}px`;

    // Запуск слайдшоу
    changeImage();

    if (timer) {
        clearInterval(timer); // Уникнення дублювання таймера
    }

    timer = setInterval(changeImage, interval);
}

function changeImage() {
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length; // Циклічний індекс
}

function stop() {
    if (timer) {
        clearInterval(timer); // Зупинити таймер
        timer = null;
    }
}

