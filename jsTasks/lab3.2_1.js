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