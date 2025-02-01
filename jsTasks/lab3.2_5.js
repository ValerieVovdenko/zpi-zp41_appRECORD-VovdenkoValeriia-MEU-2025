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
