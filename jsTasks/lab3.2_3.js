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
