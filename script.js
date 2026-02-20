// Ждем, пока загрузится весь HTML, чтобы кнопка точно нашлась
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('calculateBtn').addEventListener('click', function() {
        let name = document.getElementById('scoutName').value;
        let height = parseFloat(document.getElementById('titanHeight').value);
        let width = parseFloat(document.getElementById('titanWidth').value);
        let isAbnormal = document.getElementById('isAbnormal').checked; 

        let greetingEl = document.getElementById('greeting');
        let massResultEl = document.getElementById('massResult');
        let classificationEl = document.getElementById('classification');
        let abnormalWarningEl = document.getElementById('abnormalWarning');

        // Проверка на пустые поля или минусы
        if (name === "" || isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
            greetingEl.textContent = "Ошибка!";
            massResultEl.textContent = "Введи правильные числа и имя.";
            classificationEl.textContent = "";
            abnormalWarningEl.textContent = ""; 
            return; 
        }

        // Вычисления
        let volume = height * (width * width) * 0.5;
        let massKg = volume * (1000 / 8);
        let massTons = (massKg / 1000).toFixed(2); 

        // Логика if/else
        let classificationText = "";
        if (height >= 60) {
            classificationText = "Колоссальный титан!";
            classificationEl.style.color = "#ff4c4c"; 
        } else if (height >= 15) {
            classificationText = "Крупный титан.";
            classificationEl.style.color = "#ffaa00"; 
        } else {
            classificationText = "Обычный титан.";
            classificationEl.style.color = "#a0d468"; 
        }

        // Вывод на экран
        greetingEl.textContent = "Привет, " + name + "!";
        massResultEl.textContent = "Истинная масса: " + massTons + " тонн.";
        classificationEl.textContent = classificationText;

        if (isAbnormal) {
            abnormalWarningEl.textContent = "ВНИМАНИЕ! АНОМАЛИЯ!";
        } else {
            abnormalWarningEl.textContent = ""; 
        }
    });
});
