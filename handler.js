document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.panel');
  
    form.addEventListener('submit', event => {
      event.preventDefault();
  
      const delayField = form.elements.time;
      const selectedRadio = form.querySelector('input[name="result"]:checked');
  
      const delay = parseInt(delayField.value, 10);
      const outcome = selectedRadio ? selectedRadio.value : null;
  
      if (isNaN(delay) || delay <= 0) {
        iziToast.warning({
          title: 'Помилка',
          message: 'Введіть коректну затримку більше 0 мс',
          position: 'topRight',
        });
        return;
      }
  
      if (!outcome) {
        iziToast.warning({
          title: 'Увага',
          message: 'Оберіть результат виконання обіцянки',
          position: 'topRight',
        });
        return;
      }
  
      new Promise((resolve, reject) => {
        setTimeout(() => {
          outcome === 'success' ? resolve(delay) : reject(delay);
        }, delay);
      })
      .then(time => {
        iziToast.success({
          title: 'Готово',
          message: `Успішно через ${time} мс`,
          position: 'topRight',
          backgroundColor: '#2e7d32',
          titleColor: '#fff',
          messageColor: '#fff',
          iconColor: '#fff',
        });
      })
      .catch(time => {
        iziToast.error({
          title: 'Збій',
          message: `Помилка через ${time} мс`,
          position: 'topRight',
          backgroundColor: '#c62828',
          titleColor: '#fff',
          messageColor: '#fff',
          iconColor: '#fff',
        });
      });
  
      delayField.value = '';
      if (selectedRadio) selectedRadio.checked = false;
    });
  });