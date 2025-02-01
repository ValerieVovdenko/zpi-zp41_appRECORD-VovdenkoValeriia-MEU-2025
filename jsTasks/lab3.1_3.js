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