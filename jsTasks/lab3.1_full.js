//Завдання №1
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Приклад використання:
console.log(makeTransaction(3, 200));
console.log(makeTransaction(20, 11, 5));
console.log(makeTransaction(8, 2000));

//Завдання №2
function checkForSpam(message) {
    const result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
    return result;
}

// Приклад використання:
console.log(checkForSpam('Big Tech Divide'));
console.log(checkForSpam('The 19th-Century spam Technology'));
console.log(checkForSpam('Made an Art of Upending Expectations'));


//Завдання №3
function filterArray(numbers, value) {
    const filteredNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > value) {
            filteredNumbers.push(numbers[i]);
        }
    }
    return filteredNumbers;
}

// Приклад використання:

console.log(filterArray([1, 20, 8, 11, 6], 10));
console.log(filterArray([2, 7, 3, 9, 1], 8));
console.log(filterArray([41, 22, 83, 74, 56], 56));
console.log(filterArray([4, 11, 6, 21, 36], 48));


//Завдання №4

function generateArray() {
    //Перевірка отриманого значення
    const size = getSize();
    console.log(size);
    if (!size) {
        return;
    }

    // Генеруємо масив випадкових чисел
    const array = [];
    for (let i = 0; i < size; i++) {
        const val = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
        array.push(val);
    }

    return array;
}

function getSize() {
    let size = parseInt(window.prompt('Enter number of elements in array'));

    if (isNaN(size) || size <= 0) {
        const isEnter = window.confirm('Enter correct number of elements in array. Do you want to try again?');
        if (isEnter) {
            return getSize();
        } else {
            return;
        }
    }

    console.log(parseInt(size));

    return size;
}

function findMinAndMaxValues(array) {
    // Поділяємо елементи на парні та непарні індекси
    const evenIndices = array.filter((_, index) => index % 2 === 0);
    const oddIndices = array.filter((_, index) => index % 2 !== 0);

    // Знаходимо максимум та мінімум
    const evenMax = Math.max(...evenIndices);
    const evenMin = Math.min(...evenIndices);
    const oddMax = Math.max(...oddIndices);
    const oddMin = Math.min(...oddIndices);

    // Виводимо результати
    window.alert(`
        Масив: ${array.join(', ')}
        Максимальне (парні індекси): ${evenMax}
        Мінімальне (парні індекси): ${evenMin}
        Максимальне (непарні індекси): ${oddMax}
        Мінімальне (непарні індекси): ${oddMin}
    `);
}

function main() {
    const array = generateArray();

    if (!array) {
        return;
    }

    findMinAndMaxValues(array);
}

//main();

function sortArray(arr) {
    const originalArray = [...arr];

    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }

    return `Вхідний масив: ${originalArray.join(', ')}
Відсортований масив (зменшення): ${arr.join(', ')}`;
}


//Приклади використання:
console.log(sortArray([25, 12, 45, 71, 105, 21, 17, 12, 0]));
console.log(sortArray([5, 1, -1, 7, 3, 75, 11, 1, 5]));




