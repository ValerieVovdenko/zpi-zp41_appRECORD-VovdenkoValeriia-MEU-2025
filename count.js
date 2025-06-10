const dateInput = document.getElementById('pick-date');
const runButton = document.getElementById('launch-timer');

const dView = document.getElementById('day-count');
const hView = document.getElementById('hour-count');
const mView = document.getElementById('minute-count');
const sView = document.getElementById('second-count');

let selectedMoment = null;
let intervalId = null;

flatpickr(dateInput, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(dates) {
        const chosen = dates[0];
        if (chosen <= new Date()) {
            iziToast.warning({
                title: 'Увага',
                message: 'Оберіть майбутній час!',
                position: 'topCenter'
            });
            runButton.disabled = true;
            selectedMoment = null;
        } else {
            selectedMoment = chosen;
            runButton.disabled = false;
            clearInterval(intervalId);
            displayCountdown(0, 0, 0, 0);
        }
    }
});

runButton.addEventListener('click', () => {
    if (!selectedMoment) return;

    runButton.disabled = true;
    dateInput.disabled = true;

    intervalId = setInterval(() => {
        const diff = selectedMoment - new Date();

        if (diff <= 0) {
            clearInterval(intervalId);
            displayCountdown(0, 0, 0, 0);
            dateInput.disabled = false;
            iziToast.success({
                title: 'Готово',
                message: 'Час вийшов!',
                position: 'topCenter'
            });
            return;
        }

        const t = breakdownTime(diff);
        displayCountdown(t.days, t.hours, t.minutes, t.seconds);
    }, 1000);
});

function breakdownTime(ms) {
    const sec = 1000, min = sec * 60, hr = min * 60, d = hr * 24;
    return {
        days: Math.floor(ms / d),
        hours: Math.floor((ms % d) / hr),
        minutes: Math.floor((ms % hr) / min),
        seconds: Math.floor((ms % min) / sec)
    };
}

function pad(val) {
    return String(val).padStart(2, '0');
}

function displayCountdown(d, h, m, s) {
    dView.textContent = pad(d);
    hView.textContent = pad(h);
    mView.textContent = pad(m);
    sView.textContent = pad(s);
}