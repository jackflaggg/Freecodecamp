// Установка начального времени (10 минут и 30 секунд)
let minutes = 10;
let seconds = 30;

// Конвертация времени в миллисекунды
let totalTime = (minutes * 60 + seconds) * 1000;

// Функция, которая будет вызываться каждую секунду
function timerCallback() {
    // Проверка, осталось ли время
    if (totalTime > 0) {
        // Вычисление минут и секунд из оставшегося времени
        let remainingMinutes = Math.floor(totalTime / 60000);
        let remainingSeconds = Math.floor((totalTime % 60000) / 1000);

        // Вывод времени
        console.log(`Осталось времени: ${remainingMinutes} мин. ${remainingSeconds} сек.`);

        // Уменьшение оставшегося времени на 1 секунду
        totalTime -= 1000;
    } else {
        // Время истекло
        console.log("Время истекло!");
        clearInterval(timerInterval); // Остановка интервала
    }
}

// Запуск таймера с интервалом 1 секунда
let timerInterval = setInterval(timerCallback, 1000);