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