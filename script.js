document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('calculateBtn').addEventListener('click', function() {
        // 1. ПОЛУЧЕНИЕ ДАННЫХ
        let name = document.getElementById('scoutName').value;
        let height = parseFloat(document.getElementById('titanHeight').value);
        let width = parseFloat(document.getElementById('titanWidth').value);
        let isAbnormal = document.getElementById('isAbnormal').checked; 

        let greetingEl = document.getElementById('greeting');
        let massResultEl = document.getElementById('massResult');
        let classificationEl = document.getElementById('classification');
        let abnormalWarningEl = document.getElementById('abnormalWarning');
        let titanImg = document.getElementById('titanImage');
        let meterContainer = document.getElementById('meterContainer');
        let dangerMeter = document.getElementById('dangerMeter');

        // 2. ПРОВЕРКА ОШИБОК
        if (name === "" || isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
            greetingEl.textContent = "Ошибка данных!";
            massResultEl.textContent = "Введите имя и положительные числа.";
            classificationEl.textContent = "";
            abnormalWarningEl.textContent = ""; 
            titanImg.style.display = 'none';
            meterContainer.style.display = 'none';
            return; 
        }

        // 3. МАТЕМАТИКА
        let volume = height * (width * width) * 0.5;
        let massKg = volume * (1000 / 8); // Учитываем низкую плотность титанов
        let massTons = (massKg / 1000).toFixed(2); 

        // Показываем блоки результата
        titanImg.style.display = 'block';
        meterContainer.style.display = 'block';

        let classificationText = "";
        
        // 4. ЛОГИКА НА 3 ВИДА ТИТАНОВ
        if (height >= 60) {
            // КОЛОССАЛЬНЫЙ
            classificationText = "КЛАСС: КОЛОССАЛЬНЫЙ ТИТАН!";
            classificationEl.style.color = "#ff4c4c"; 
            dangerMeter.style.width = '100%';
            dangerMeter.style.backgroundColor = '#ff4c4c'; 
            titanImg.src = 'collosal.gif'; // Твоя гифка для колосса
        } else if (height >= 5) {
            // СРЕДНИЙ (от 5 до 59 метров)
            classificationText = "КЛАСС: СРЕДНИЙ ТИТАН.";
            classificationEl.style.color = "#ffaa00"; 
            dangerMeter.style.width = '50%';
            dangerMeter.style.backgroundColor = '#ffaa00'; 
            titanImg.src = 'hugee.gif'; // Твоя гифка для среднего
        } else {
            // МЕЛКИЙ (меньше 5 метров)
            classificationText = "КЛАСС: МЕЛКИЙ ТИТАН.";
            classificationEl.style.color = "#a0d468"; 
            dangerMeter.style.width = '20%';
            dangerMeter.style.backgroundColor = '#a0d468'; 
            titanImg.src = 'small.gif'; // Твоя гифка для мелкого
        }

        // 5. ВЫВОД РЕЗУЛЬТАТОВ
        greetingEl.textContent = "Привет, разведчик " + name + "!";
        massResultEl.textContent = "Истинная масса: " + massTons + " тонн.";
        classificationEl.textContent = classificationText;

        // Бинарный вывод (Аномалия)
        if (isAbnormal) {
            abnormalWarningEl.textContent = "⚠️ ВНИМАНИЕ! ТИТАН АНОМАЛЕН! ЦЕЛЬ НЕПРЕДСКАЗУЕМА!";
        } else {
            abnormalWarningEl.textContent = ""; 
        }
    });

    // ЛОГИКА КНОПКИ СБРОСА
    document.getElementById('resetBtn').addEventListener('click', function() {
        document.getElementById('scoutName').value = '';
        document.getElementById('titanHeight').value = '';
        document.getElementById('titanWidth').value = '';
        document.getElementById('isAbnormal').checked = false;
        greetingEl.textContent = '';
        titanImg.style.display = 'none';
        meterContainer.style.display = 'none';
    });
});
