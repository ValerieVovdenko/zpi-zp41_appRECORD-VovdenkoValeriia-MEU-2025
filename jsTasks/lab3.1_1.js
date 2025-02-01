//Завдання №1
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Приклад використання:
console.log(makeTransaction(3, 200));
console.log(makeTransaction(20, 11, 5));
console.log(makeTransaction(8, 2000));