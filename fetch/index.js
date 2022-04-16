const URL = 'https://raw.githubusercontent.com/PolinaShneider/kids-web/main/data/goods.json';

fetch(URL)
.then((res) => res.json())
.then((data) => {
    data.forEach(makeCard)
})

const container = document.querySelector('.container');
const cardTemplate = document.querySelector('#item-card');
function makeCard({title, description, img, price}) {
    console.log(cardTemplate)
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector('h1').textContent = title;
    card.querySelector('p').textContent = description;
    card.querySelector('img').src = `${URL}/${img}`;
    card.querySelector('.price').textContent = price;

    container.append(card);
}