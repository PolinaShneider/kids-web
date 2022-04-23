const PHRASES = [
    'Привет!',
    'Сегодня прекрасная погода',
    'Изучаем JavaScript',
    'Хочу пиццу',
    'Котики',
    'Шо тут происходит?',
    'Школа, отпусти...'
];
const FONTS = ['Caveat', 'Comfortaa', 'Merriweather', 'PT Mono', 'Roboto'];

// блок перменных с HTML-элементами
const dataContainer = document.querySelector('.data');

const generateWordsBtn = document.querySelector('.words');
const generateBgBtn = document.querySelector('.bg');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

const delayBtn = document.querySelector('.delay');
const cancelBtn = document.querySelector('.cancel');

// таймеры
let timerId;
let delayTimerId;


// получить случайный элемент из переданного массива
const getRandomEl = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

// сгенерировать случайный цвет
const getRandomColor = () => {
    const chars = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

// установить случайного цвета фон
const generateBg = () => {
    document.body.style.background = getRandomColor();
}

// добавить на страницу случайную фразу из массива PHRASES,
// написанную случайным шрифтом из массива FONTS
const generateWords = () => {
    dataContainer.querySelector('h1').textContent = getRandomEl(PHRASES);
    dataContainer.querySelector('h1').style.fontFamily = getRandomEl(FONTS);
}

// добавить обработчики на кнопки ручной генерации
generateBgBtn.addEventListener('click', generateBg)
generateWordsBtn.addEventListener('click', generateWords)

// включаем автоматическую генерацию
startBtn.addEventListener('click', () => {
    // записываем значение в timerId, чтоб его можно было потом сбросить
    timerId = setInterval(() => {
        generateWords();
        generateBg();
    }, 500);

    // дизейблим кнопки
    generateWordsBtn.disabled = true;
    generateBgBtn.disabled = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

// останавливаем автоматическую генерацию
stopBtn.addEventListener('click', () => {
    // очищаем timerId
    clearInterval(timerId);

    // активируем кнопки
    generateWordsBtn.disabled = false;
    generateBgBtn.disabled = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

// создаем отложенную задачу
delayBtn.addEventListener('click', () => {
    // записываем значение в delayTimerId
    delayTimerId = setTimeout(() => {
        alert('Та-дам!')
    }, 1000)
})

// отменяем отложенную задачу до истечения 1000 мс
cancelBtn.addEventListener('click', () => {
    // ощищаем таймер, и ничего не выведется
    clearTimeout(delayTimerId);
})

