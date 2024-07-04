// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const now = new Date();

        // Actualizar el reloj digital
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
        const day = now.getDate();
        const month = now.toLocaleString('en-US', { month: 'long' });
        const year = now.getFullYear();

        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('day-of-week').textContent = dayOfWeek;
        document.getElementById('day').textContent = day;
        document.getElementById('month').textContent = month;
        document.getElementById('year').textContent = year;

        // Actualizar el reloj analógico
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        const hoursDegrees = ((hours / 12) * 360) + 90;

        document.getElementById('second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
        document.getElementById('minute-hand').style.transform = `rotate(${minutesDegrees}deg)`;
        document.getElementById('hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Llamada inicial para mostrar la hora al cargar la página
});
