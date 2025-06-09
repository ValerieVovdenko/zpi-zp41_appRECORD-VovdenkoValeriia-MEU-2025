const cacheKey = 'feedback-form-state';
const state = {
  email: '',
  message: ''
};

const form = document.querySelector('.contact-form');
const emailField = form.elements.email;
const messageField = form.elements.message;

// Відновлення даних із localStorage
function loadCache() {
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    if (cached) {
      state.email = cached.email || '';
      state.message = cached.message || '';
      emailField.value = state.email;
      messageField.value = state.message;
    }
  } catch (e) {
    console.warn('Помилка при зчитуванні з localStorage', e);
  }
}

// Збереження в localStorage
function saveCache() {
  localStorage.setItem(cacheKey, JSON.stringify(state));
}

// Обробка введення
form.addEventListener('input', ({ target }) => {
  if (target.name in state) {
    state[target.name] = target.value.trim();
    saveCache();
  }
});

// Обробка надсилання
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!state.email || !state.message) {
    alert('Будь ласка, заповніть всі поля');
    return;
  }
  console.log('Дані форми:', state);
  localStorage.removeItem(cacheKey);
  form.reset();
  state.email = '';
  state.message = '';
});

window.addEventListener('DOMContentLoaded', loadCache);