//Завдання №2
function checkForSpam(message) {
    const result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
    return result;
}

// Приклад використання:
console.log(checkForSpam('Big Tech Divide'));
console.log(checkForSpam('The 19th-Century spam Technology'));
console.log(checkForSpam('Made an Art of Upending Expectations'));