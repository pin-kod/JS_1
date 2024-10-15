// Задание 1

let musicCollection = {
    albums: [
        {
            title: "Music",
            artist: "Madonna",
            year: "2000"
        },
        {
            title: "The Bridge",
            artist: "Sting",
            year: "2021"
        },
        {
            title: "Лабиринт",
            artist: "Григорий Лепс",
            year: "2006"
        },
        {
            title: "Как в старой сказке",
            artist: "Король и Шут",
            year: "2001"
        }
    ],
    [Symbol.iterator]: function Symbol() {
        let index = 0;
        return {
            next: function () {
                if (index < musicCollection.albums.length) {
                    return {
                        value: musicCollection.albums[index++],
                        done: false
                    }
                } else {
                    return { done: true }
                }
            }
        }
    }
};

for (let album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
};



//Задание 2
let cook = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Cуши"],
    ["Дмитрий", "Десерты"]
]);
cook.forEach((value, key, map) => {
    console.log(`${key}: специализация ${value}`);
});

let dishes = new Map([
    ["Пицца Маргарита", "Виктор"],
    ["Пицца Пепперони", "Виктор"],
    ["Суши Филадельфия", "Ольга"],
    ["Суши Калифорния", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);
dishes.forEach((value, key, map) => {
    console.log(`${key} - повар: ${value}`);
});

let clients = [
    {
        name: "Алексей",
        order: "Пиццу Пепперони и Тирамису"
    },
    {
        name: "Мария",
        order: "Суши Калифорния и Пиццу Маргарита"
    },
    {
        name: "Ирина",
        order: "Чизкейк"
    }
];

clients.map((client) => console.log(`Клиент ${client.name} заказал: ${client.order}`));

