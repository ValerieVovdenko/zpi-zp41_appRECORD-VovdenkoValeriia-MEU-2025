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

