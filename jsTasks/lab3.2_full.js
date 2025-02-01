//Завдання №1
// Функція для створення об'єкта продукту та передачі його в колбек
function createProduct(obj, callback) {
    // Додаємо унікальний ідентифікатор до об'єкта
    const product = { ...obj, id: Date.now() };
    // Викликаємо колбек-функцію з новоствореним продуктом
    callback(product);
}

// Колбек для логування інформації про продукт
const logProduct = (product) => console.log("Product:", product);

// Колбек для логування загальної вартості продукту
const logTotalPrice = (product) =>
    console.log("Total Price:", product.price * product.quantity);

// Приклад використання:
createProduct({ name: "Television", price: 2300, quantity: 5 }, logProduct);
createProduct({ name: "Television", price: 2300, quantity: 5 }, logTotalPrice);
createProduct({ name: "Xbox", price: 800, quantity: 1 }, logProduct);
createProduct({ name: "Xbox", price: 800, quantity: 1 }, logTotalPrice);


//Завдання №3
// Об'єкт із медикаментами та їх датами придатності
const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2025-04-18"),
};

// Отримуємо масив дійсних препаратів, сортуємо за датою придатності
const validMedicines = Object.entries(medicines)
    .filter(([name, date]) => date > new Date()) // Відфільтровуємо тільки актуальні
    .sort(([, dateA], [, dateB]) => dateA - dateB) // Сортуємо за датою
    .map(([name]) => name); // Отримуємо назви препаратів

console.log(validMedicines); // Виводимо результат

//Завдання №5
// Масив фруктів із назвами та цінами
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

// Робимо знижку 20% та додаємо id для кожного продукту
const discountedFruits = fruits.map((fruit, index) => ({
    ...fruit,
    id: index + 1, // Додаємо id
    price: fruit.price * 0.8, // Застосовано знижку 20%
}));

console.log(discountedFruits); // Виводимо оновлений масив


//Завдання №7

// Створюємо клас Client для об'єкта клієнта з приватними властивостями
class Client {
    #login; // Приватна властивість login
    #email; // Приватна властивість email

    constructor(login, email) {
        this.#login = login; // Ініціалізація login
        this.#email = email; // Ініціалізація email
    }

    // Геттер для login
    get login() {
        return this.#login;
    }
    // Сеттер для login
    set login(newLogin) {
        this.#login = newLogin;
    }
    // Геттер для email
    get email() {
        return this.#email;
    }
    // Сеттер для email
    set email(newEmail) {
        this.#email = newEmail;
    }
}

// Приклад використання:
const client = new Client("user", "user@gmail.com");
console.log(client.login); // Виводимо user
client.login = "Koval"; // Оновлюємо login
console.log(client.login); // Виводимо Koval

//Завдання №9
// Масив з тегами
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];


// Підраховуємо кількість кожного тегу
const countTag = tweets
    .flatMap(({ tags }) => tags) // Розгортання всіх тегів в один масив
    .reduce((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1; // Підраховуємо кількість тегів
        return acc;
    }, {});

console.log(countTag); // Результат для перевірки: {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

//Завдання №10
// Перевірка правильності закриття дужок у рядку
function checkBrackets(str) {
    const stack = [];
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (const char of str) {
        if (brackets[char]) {
            stack.push(char); // Відкриваюча дужка додається в стек
        } else if (Object.values(brackets).includes(char)) {
            const last = stack.pop(); // Порівнюємо зі стеком
            if (brackets[last] !== char) return false; // Помилка, якщо дужки не збігаються
        }
    }

    return stack.length === 0; // Перевіряємо, чи всі дужки закриті
}

// Приклад використання:
console.log(checkBrackets("someFn({})")); // true
console.log(checkBrackets("someFn({[)]}")); // false