import './sass/style.scss';

let categories = [{
    name: 'Main',
    icon: './src/assets/icons/Main.png'
},
{
    name: 'Animals',
    image: './src/assets/cards/animals/Animals.jpg',
    icon: './src/assets/icons/Animals.png'
},
{
    name: 'Clothes',
    image: './src/assets/cards/clothes/Clothes.jpg',
    icon: './src/assets/icons/Clothes.png'
},
{
    name: 'Colours',
    image: './src/assets/cards/colours/Colours.jpg',
    icon: './src/assets/icons/Colours.png'
},
{
    name: 'Family',
    image: './src/assets/cards/family/Family.jpg',
    icon: './src/assets/icons/Family.png'
},
{
    name: 'Furniture',
    image: './src/assets/cards/furniture/Furniture.jpg',
    icon: './src/assets/icons/Furniture.png'
},
{
    name: 'Nature',
    image: './src/assets/cards/nature/Nature.jpg',
    icon: './src/assets/icons/Nature.png'
},
{
    name: 'Sport',
    image: './src/assets/cards/sport/Sport.jpg',
    icon: './src/assets/icons/Sport.png'
},
{
    name: 'Transport',
    image: './src/assets/cards/transport/Transport.jpg',
    icon: './src/assets/icons/Transport.png'
},
{
    name: 'Hacker scope',
    icon: './src/assets/icons/HackerScope.png'
},
];

let cards = {
    animals: [{
        word: 'Cat',
        translation: 'Кот',
        image: './src/assets/cards/animals/Cat.png',
        audioSrc: './src/assets/audio/animals/cat.mp3'
    },
    {
        word: 'Bear',
        translation: 'Медведь',
        image: './src/assets/cards/animals/Bear.jpg',
        audioSrc: './src/assets/audio/animals/bear.mp3'
    },
    {
        word: 'Cow',
        translation: 'Корова',
        image: './src/assets/cards/animals/Cow.jpg',
        audioSrc: './src/assets/audio/animals/cow.mp3'
    },
    {
        word: 'Goose',
        translation: 'Гусь',
        image: './src/assets/cards/animals/Goose.jpg',
        audioSrc: './src/assets/audio/animals/goose.mp3'
    },
    {
        word: 'Dog',
        translation: 'Собака',
        image: './src/assets/cards/animals/Dog.jpg',
        audioSrc: './src/assets/audio/animals/dog.mp3'
    },
    {
        word: 'Hare',
        translation: 'Заяц',
        image: './src/assets/cards/animals/Hare.jpg',
        audioSrc: './src/assets/audio/animals/hare.mp3'
    },
    {
        word: 'Wolf',
        translation: 'Собака',
        image: './src/assets/cards/animals/Wolf.jpg',
        audioSrc: './src/assets/audio/animals/wolf.mp3'
    },
    {
        word: 'Fox',
        translation: 'Лиса',
        image: './src/assets/cards/animals/Fox.jpg',
        audioSrc: './src/assets/audio/animals/fox.mp3'
    }],
    clothes: [{
        word: 'Shorts',
        translation: 'Шорты',
        image: './src/assets/cards/clothes/Shorts.jpg',
        audioSrc: './src/assets/audio/clothes/shorts.mp3'
    },
    {
        word: 'Dress',
        translation: 'Платье',
        image: './src/assets/cards/clothes/Dress.jpeg',
        audioSrc: './src/assets/audio/clothes/dress.mp3'
    },
    {
        word: 'Shirt',
        translation: 'Рубашка',
        image: './src/assets/cards/clothes/Shirt.jpg',
        audioSrc: './src/assets/audio/clothes/shirt.mp3'
    },
    {
        word: 'Coat',
        translation: 'Пальто',
        image: './src/assets/cards/clothes/Coat.jpg',
        audioSrc: './src/assets/audio/clothes/coat.mp3'
    },
    {
        word: 'Jacket',
        translation: 'Пиджак',
        image: './src/assets/cards/clothes/Jacket.jpg',
        audioSrc: './src/assets/audio/clothes/jacket.mp3'
    },
    {
        word: 'Skirt',
        translation: 'Юбка',
        image: './src/assets/cards/clothes/Skirt.jpg',
        audioSrc: './src/assets/audio/clothes/skirt.mp3'
    },
    {
        word: 'Pants',
        translation: 'Штаны',
        image: './src/assets/cards/clothes/Pants.jpg',
        audioSrc: './src/assets/audio/clothes/pants.mp3'
    },
    {
        word: 'T-Shirt',
        translation: 'Футболка',
        image: './src/assets/cards/clothes/TShirt.jpg',
        audioSrc: './src/assets/audio/clothes/t-shirt.mp3'
    }],
    colours: [{
        word: 'Pink',
        translation: 'Розовый',
        image: './src/assets/cards/colours/Pink.jpg',
        audioSrc: './src/assets/audio/colours/pink.mp3'
    },
    {
        word: 'Black',
        translation: 'Черный',
        image: './src/assets/cards/colours/Black.jpeg',
        audioSrc: './src/assets/audio/colours/black.mp3'
    },
    {
        word: 'Yellow',
        translation: 'Желтый',
        image: './src/assets/cards/colours/Yellow.jpeg',
        audioSrc: './src/assets/audio/colours/yellow.mp3'
    },
    {
        word: 'Blue',
        translation: 'Синий',
        image: './src/assets/cards/colours/Blue.jpg',
        audioSrc: './src/assets/audio/colours/blue.mp3'
    },
    {
        word: 'White',
        translation: 'Белый',
        image: './src/assets/cards/colours/White.jpg',
        audioSrc: './src/assets/audio/colours/white.mp3'
    },
    {
        word: 'Green',
        translation: 'Зеленый',
        image: './src/assets/cards/colours/Green.jpeg',
        audioSrc: './src/assets/audio/colours/green.mp3'
    },
    {
        word: 'Orange',
        translation: 'Оранжевый',
        image: './src/assets/cards/colours/Orange.jpg',
        audioSrc: './src/assets/audio/colours/orange.mp3'
    },
    {
        word: 'Red',
        translation: 'Красный',
        image: './src/assets/cards/colours/Red.jpg',
        audioSrc: './src/assets/audio/colours/red.mp3'
    }],
    family: [{
        word: 'Daughter',
        translation: 'Дочь',
        image: './src/assets/cards/family/Daughter.jpg',
        audioSrc: './src/assets/audio/family/daughter.mp3'
    },
    {
        word: 'Twins',
        translation: 'Близнецы',
        image: './src/assets/cards/family/Twins.jpg',
        audioSrc: './src/assets/audio/family/twins.mp3'
    },
    {
        word: 'Grandmother',
        translation: 'Бабушка',
        image: './src/assets/cards/family/Grandmother.jpg',
        audioSrc: './src/assets/audio/family/grandmother.mp3'
    },
    {
        word: 'Father',
        translation: 'Папа',
        image: './src/assets/cards/family/Father.jpg',
        audioSrc: './src/assets/audio/family/father.mp3'
    },
    {
        word: 'Son',
        translation: 'Сын',
        image: './src/assets/cards/family/Son.jpg',
        audioSrc: './src/assets/audio/family/son.mp3'
    },
    {
        word: 'Mother',
        translation: 'Мама',
        image: './src/assets/cards/family/Mother.jpg',
        audioSrc: './src/assets/audio/family/mother.mp3'
    },
    {
        word: 'Grandfather',
        translation: 'Бабушка',
        image: './src/assets/cards/family/Grandfather.png',
        audioSrc: './src/assets/audio/family/grandfather.mp3'
    },
    {
        word: 'Parents',
        translation: 'Родители',
        image: './src/assets/cards/family/Parents.jpg',
        audioSrc: './src/assets/audio/family/parents.mp3'
    }],
    furniture: [{
        word: 'Armchair',
        translation: 'Кресло',
        image: './src/assets/cards/furniture/Armchair.jpg',
        audioSrc: './src/assets/audio/furniture/armchair.mp3'
    },
    {
        word: 'Table',
        translation: 'Стол',
        image: './src/assets/cards/furniture/Table.jpg',
        audioSrc: './src/assets/audio/furniture/table.mp3'
    },
    {
        word: 'Bed',
        translation: 'Кровать',
        image: './src/assets/cards/furniture/Bed.jpg',
        audioSrc: './src/assets/audio/furniture/bed.mp3'
    },
    {
        word: 'Sofa',
        translation: 'Диван',
        image: './src/assets/cards/furniture/Sofa.jpg',
        audioSrc: './src/assets/audio/furniture/sofa.mp3'
    },
    {
        word: 'Chair',
        translation: 'Стул',
        image: './src/assets/cards/furniture/Chair.jpg',
        audioSrc: './src/assets/audio/furniture/chair.mp3'
    },
    {
        word: 'Mirror',
        translation: 'Зеркало',
        image: './src/assets/cards/furniture/Mirror.jpg',
        audioSrc: './src/assets/audio/furniture/mirror.mp3'
    },
    {
        word: 'Wardrobe',
        translation: 'Шкаф',
        image: './src/assets/cards/furniture/Wardrobe.jpg',
        audioSrc: './src/assets/audio/furniture/wardrobe.mp3'
    },
    {
        word: 'Picture',
        translation: 'Картина',
        image: './src/assets/cards/furniture/Picture.jpg',
        audioSrc: './src/assets/audio/furniture/picture.mp3'
    }],
    nature: [{
        word: 'Mountain',
        translation: 'Гора',
        image: './src/assets/cards/nature/Mountain.png',
        audioSrc: './src/assets/audio/nature/mountain.mp3'
    },
    {
        word: 'Watterfall',
        translation: 'Водопад',
        image: './src/assets/cards/nature/Watterfall.jpg',
        audioSrc: './src/assets/audio/nature/watterfall.mp3'
    },
    {
        word: 'Sun',
        translation: 'Солнце',
        image: './src/assets/cards/nature/Sun.png',
        audioSrc: './src/assets/audio/nature/sun.mp3'
    },
    {
        word: 'Grass',
        translation: 'Трава',
        image: './src/assets/cards/nature/Grass.jpg',
        audioSrc: './src/assets/audio/nature/grass.mp3'
    },
    {
        word: 'River',
        translation: 'Река',
        image: './src/assets/cards/nature/River.jpg',
        audioSrc: './src/assets/audio/nature/river.mp3'
    },
    {
        word: 'Moon',
        translation: 'Луна',
        image: './src/assets/cards/nature/Moon.jpg',
        audioSrc: './src/assets/audio/nature/moon.mp3'
    },
    {
        word: 'Sand',
        translation: 'Песок',
        image: './src/assets/cards/nature/Sand.jpg',
        audioSrc: './src/assets/audio/nature/sand.mp3'
    },
    {
        word: 'Sky',
        translation: 'Небо',
        image: './src/assets/cards/nature/Sky.jpg',
        audioSrc: './src/assets/audio/nature/sky.mp3'
    }],
    sport: [{
        word: 'Figure skating',
        translation: 'Фигурное катание',
        image: './src/assets/cards/sport/FigureSkating.jpg',
        audioSrc: './src/assets/audio/sport/figure-skating.mp3'
    },
    {
        word: 'Football',
        translation: 'Футбол',
        image: './src/assets/cards/sport/Football.jpg',
        audioSrc: './src/assets/audio/sport/football.mp3'
    },
    {
        word: 'Badminton',
        translation: 'Бадминтон',
        image: './src/assets/cards/sport/Badminton.png',
        audioSrc: './src/assets/audio/sport/badminton.mp3'
    },
    {
        word: 'Hockey',
        translation: 'Хоккей',
        image: './src/assets/cards/sport/Hockey.jpg',
        audioSrc: './src/assets/audio/sport/hockey.mp3'
    },
    {
        word: 'Basketball',
        translation: 'Баскетбол',
        image: './src/assets/cards/sport/Basketball.jpg',
        audioSrc: './src/assets/audio/sport/basketball.mp3'
    },
    {
        word: 'Volleyball',
        translation: 'Волейбол',
        image: './src/assets/cards/sport/Volleyball.jpg',
        audioSrc: './src/assets/audio/sport/volleyball.mp3'
    },
    {
        word: 'Swimming',
        translation: 'Плавание',
        image: './src/assets/cards/sport/Swimming.jpg',
        audioSrc: './src/assets/audio/sport/swimming.mp3'
    },
    {
        word: 'Dancing',
        translation: 'Танцы',
        image: './src/assets/cards/sport/Dancing.png',
        audioSrc: './src/assets/audio/sport/dancing.mp3'
    }],
    transport: [{
        word: 'Plain',
        translation: 'Самолет',
        image: './src/assets/cards/transport/Plain.jpg',
        audioSrc: './src/assets/audio/transport/plain.mp3'
    },
    {
        word: 'Ship',
        translation: 'Корабль',
        image: './src/assets/cards/transport/Ship.jpg',
        audioSrc: './src/assets/audio/transport/ship.mp3'
    },
    {
        word: 'Bus',
        translation: 'Автобус',
        image: './src/assets/cards/transport/Bus.jpg',
        audioSrc: './src/assets/audio/transport/bus.mp3'
    },
    {
        word: 'Taxi',
        translation: 'Такси',
        image: './src/assets/cards/transport/Taxi.jpg',
        audioSrc: './src/assets/audio/transport/taxi.mp3'
    },
    {
        word: 'Metro',
        translation: 'Метро',
        image: './src/assets/cards/transport/Metro.jpg',
        audioSrc: './src/assets/audio/transport/metro.mp3'
    },
    {
        word: 'Car',
        translation: 'Машина',
        image: './src/assets/cards/transport/Car.png',
        audioSrc: './src/assets/audio/transport/car.mp3'
    },
    {
        word: 'Train',
        translation: 'Поезд',
        image: './src/assets/cards/transport/Train.jpg',
        audioSrc: './src/assets/audio/transport/train.mp3'
    },
    {
        word: 'Bicycle',
        translation: 'Велосипед',
        image: './src/assets/cards/transport/Bicycle.jpg',
        audioSrc: './src/assets/audio/transport/bicycle.mp3'
    }]
}

function fillMenuByIcon() {

    const menu = document.querySelectorAll('#menu a');

    for (let i = 0; i < menu.length; i++) {

        menu[i].textContent = categories[i].name;
        menu[i].id = categories[i].name;

        var linkLabel = document.createElement("Label");
        linkLabel.setAttribute("for", menu[i].id.toLowerCase());
        linkLabel.style.background = `url('${categories[i].icon}') no-repeat right`;
        linkLabel.classList.add('link__icon');

        menu[i].parentNode.prepend(linkLabel);
    }

}

function fillMainCards() {

    const cards = document.querySelectorAll('.main-card');

    for (let i = 0, j = 1; i < cards.length; i++, j++) {

        cards[i].querySelector('.card-logo').style.background = `url('${categories[j].image}') center top / 260px no-repeat`;
        cards[i].querySelector('.card-title').textContent = categories[j].name;

    }

}

document.addEventListener("DOMContentLoaded", fillMenuByIcon());
document.addEventListener("DOMContentLoaded", fillMainCards());


const main = document.querySelector('main');
main.addEventListener('click', () => {
    document.querySelector('#menu-checkbox').checked = false;
});

const menuToggle = document.querySelector('#switch');
menuToggle.addEventListener('click', () => {

    document.querySelector('#menu-checkbox').checked = false;
    document.querySelectorAll('#menu, .menu__link, #switch, .card-header').forEach(e => e.classList.toggle('play-mode'));
    document.querySelectorAll('.link__icon').forEach(e => e.classList.toggle('play-mode_icon'));
});

const menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__link')) {
        menu.querySelectorAll('a').forEach(el => el.classList.remove('menu__link_selected'));
        event.target.classList.add('menu__link_selected');
    }
})