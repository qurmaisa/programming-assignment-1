document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ЛОГИКА АНАЛИЗА
    document.getElementById('calculateBtn').addEventListener('click', function() {
        let name = document.getElementById('scoutName').value;
        let height = parseFloat(document.getElementById('titanHeight').value);
        let width = parseFloat(document.getElementById('titanWidth').value);
        let isAbnormal = document.getElementById('isAbnormal').checked; 

        let greetingEl = document.getElementById('greeting');
        let massResultEl = document.getElementById('massResult');
        let classificationEl = document.getElementById('classification');
        let abnormalWarningEl = document.getElementById('abnormalWarning');
        
        // Новые элементы: Картинка и Шкала
        let titanImg = document.getElementById('titanImage');
        let meterContainer = document.getElementById('meterContainer');
        let dangerMeter = document.getElementById('dangerMeter');

        if (name === "" || isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
            greetingEl.textContent = "Ошибка данных!";
            massResultEl.textContent = "Введи правильные числа и имя.";
            classificationEl.textContent = "";
            abnormalWarningEl.textContent = ""; 
            titanImg.style.display = 'none';
            meterContainer.style.display = 'none';
            return; 
        }

        let volume = height * (width * width) * 0.5;
        let massKg = volume * (1000 / 8);
        let massTons = (massKg / 1000).toFixed(2); 

        // Показываем скрытые элементы
        titanImg.style.display = 'block';
        meterContainer.style.display = 'block';

        let classificationText = "";
        
        // Меняем текст, шкалу и GIF-картинку в зависимости от роста
        if (height >= 60) {
            classificationText = "Колоссальный титан!";
            classificationEl.style.color = "#ff4c4c"; 
            dangerMeter.style.width = '100%';
            dangerMeter.style.backgroundColor = '#ff4c4c'; // Красная шкала
            titanImg.src = 'https://media.tenor.com/PZcZ8N_x940AAAAC/colossal-titan-attack-on-titan.gif';
        } else if (height >= 15) {
            classificationText = "Крупный титан.";
            classificationEl.style.color = "#ffaa00"; 
            dangerMeter.style.width = '75%';
            dangerMeter.style.backgroundColor = '#ffaa00'; // Оранжевая шкала
            titanImg.src = 'https://media.tenor.com/D_bT31C3dG8AAAAC/attack-on-titan-armored-titan.gif';
        } else if (height >= 5) {
            classificationText = "Средний титан.";
            classificationEl.style.color = "#ffff00"; 
            dangerMeter.style.width = '45%';
            dangerMeter.style.backgroundColor = '#ffff00'; // Желтая шкала
            titanImg.src = 'https://media.tenor.com/p_oQk1Gv03wAAAAC/aot-attack-on-titan.gif';
        } else {
            classificationText = "Мелкий титан.";
            classificationEl.style.color = "#a0d468"; 
            dangerMeter.style.width = '15%';
            dangerMeter.style.backgroundColor = '#a0d468'; // Зеленая шкала
            titanImg.src = 'https://media.tenor.com/o0vS4Gj9-d4AAAAC/titan-running.gif';
        }

        greetingEl.textContent = "Привет, " + name + "!";
        massResultEl.textContent = "Истинная масса: " + massTons + " тонн.";
        classificationEl.textContent = classificationText;

        if (isAbnormal) {
            abnormalWarningEl.textContent = "ВНИМАНИЕ! АНОМАЛИЯ! ИСПОЛЬЗОВАТЬ ГРОМОВЫЕ КОПЬЯ!";
        } else {
            abnormalWarningEl.textContent = ""; 
        }
    });

    // 2. ЛОГИКА КНОПКИ СБРОСА (Очистка)
    document.getElementById('resetBtn').addEventListener('click', function() {
        document.getElementById('scoutName').value = '';
        document.getElementById('titanHeight').value = '';
        document.getElementById('titanWidth').value = '';
        document.getElementById('isAbnormal').checked = false;

        document.getElementById('greeting').textContent = '';
        document.getElementById('massResult').textContent = '';
        document.getElementById('classification').textContent = '';
        document.getElementById('abnormalWarning').textContent = '';

        // Прячем картинку и шкалу
        document.getElementById('titanImage').style.display = 'none';
        document.getElementById('meterContainer').style.display = 'none';
        document.getElementById('dangerMeter').style.width = '0%';
    });
});
