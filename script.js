document.addEventListener('DOMContentLoaded', function () {
    // --- 1. НАХОДИМ ВСЕ НУЖНЫЕ ЭЛЕМЕНТЫ НА СТРАНИЦЕ ---
    const nameInput = document.getElementById('scoutName');
    const heightInput = document.getElementById('titanHeight');
    const widthInput = document.getElementById('titanWidth');
    const abnormalCheckbox = document.getElementById('isAbnormal');

    const greetingEl = document.getElementById('greeting');
    const massResultEl = document.getElementById('massResult');
    const classificationEl = document.getElementById('classification');
    const abnormalWarningEl = document.getElementById('abnormalWarning');
    const titanImg = document.getElementById('titanImage');
    const meterContainer = document.getElementById('meterContainer');
    const dangerMeter = document.getElementById('dangerMeter');

    const calcBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');

    // --- 2. ОБРАБОТЧИК КНОПКИ "ПРОВЕСТИ АНАЛИЗ" ---
    calcBtn.addEventListener('click', function () {
        // 2.1. Читаем введённые данные
        const name = nameInput.value;
        const height = parseFloat(heightInput.value);
        const width = parseFloat(widthInput.value);
        const isAbnormal = abnormalCheckbox.checked;

        // 2.2. Проверяем, что данные нормальные
        if (!name || isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
            greetingEl.textContent = "Ошибка данных!";
            massResultEl.textContent = "Введите имя и положительные числа.";
            classificationEl.textContent = "";
            abnormalWarningEl.textContent = "";
            titanImg.style.display = 'none';
            meterContainer.style.display = 'none';
            return; // выходим из функции, дальше не считаем
        }

        // --- 3. РАСЧЁТ ОБЪЁМА И МАССЫ ---
        // Условный объём: высота * ширина^2 * 0.5
        const volume = height * width * width * 0.5;

        // Пониженная плотность титана (килограмм на кубометр)
        const density = 1000 / 8;

        // Масса в килограммах и тоннах
        const massKg = volume * density;
        const massTons = (massKg / 1000).toFixed(2);

        // Показываем картинку и шкалу
        titanImg.style.display = "block";
        meterContainer.style.display = "block";

        // --- 4. КЛАССИФИКАЦИЯ ТИТАНА ПО РОСТУ ---
        let classificationText = "";

        if (height >= 60) {
            // КОЛОССАЛЬНЫЙ
            classificationText = "КЛАСС: КОЛОССАЛЬНЫЙ ТИТАН";
            classificationEl.style.color = "#ff4c4c";
            dangerMeter.style.width = "100%";
            dangerMeter.style.backgroundColor = "#ff4c4c";
            titanImg.src = "collosal.gif";
        } else if (height >= 5) {
            // СРЕДНИЙ
            classificationText = "КЛАСС: СРЕДНИЙ ТИТАН";
            classificationEl.style.color = "#ffaa00";
            dangerMeter.style.width = "50%";
            dangerMeter.style.backgroundColor = "#ffaa00";
            titanImg.src = "hugee.gif";
        } else {
            // МЕЛКИЙ
            classificationText = "КЛАСС: МЕЛКИЙ ТИТАН";
            classificationEl.style.color = "#a0d468";
            dangerMeter.style.width = "20%";
            dangerMeter.style.backgroundColor = "#a0d468";
            titanImg.src = "small.gif";
        }

        // --- 5. ВЫВОДИМ РЕЗУЛЬТАТЫ НА ЭКРАН ---
        greetingEl.textContent = "Привет, разведчик " + name + "!";
        massResultEl.textContent = "Истинная масса: " + massTons + " тонн.";
        classificationEl.textContent = classificationText;

        // Бинарный вывод для аномальных титанов
        if (isAbnormal) {
            abnormalWarningEl.textContent = "ВНИМАНИЕ: ТИТАН АНОМАЛЕН! ЦЕЛЬ НЕПРЕДСКАЗУЕМА!";
        } else {
            abnormalWarningEl.textContent = "";
        }
    });

    // --- 6. ОБРАБОТЧИК КНОПКИ "НОВАЯ ЦЕЛЬ" ---
    resetBtn.addEventListener('click', function () {
        // Сбрасываем поля ввода
        nameInput.value = "";
        heightInput.value = "";
        widthInput.value = "";
        abnormalCheckbox.checked = false;

        // Очищаем текст и убираем картинку со шкалой
        greetingEl.textContent = "";
        massResultEl.textContent = "";
        classificationEl.textContent = "";
        abnormalWarningEl.textContent = "";

        titanImg.style.display = "none";
        meterContainer.style.display = "none";
    });
});
