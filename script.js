// 1. Находим кнопку по её ID и говорим ей: "Когда на тебя кликнут, запусти эту функцию"
document.getElementById('calculateBtn').addEventListener('click', function() {

    // 2. ЗАБИРАЕМ ДАННЫЕ ИЗ ПОЛЕЙ ВВОДА
    // .value берет текст, который ввел пользователь
    let name = document.getElementById('scoutName').value;
    
    // parseFloat превращает текст в число с плавающей точкой (десятичное)
    let height = parseFloat(document.getElementById('titanHeight').value);
    let width = parseFloat(document.getElementById('titanWidth').value);

    // Находим места в HTML, куда будем выводить результат
    let greetingEl = document.getElementById('greeting');
    let massResultEl = document.getElementById('massResult');
    let classificationEl = document.getElementById('classification');

    // 3. ПРОВЕРКА НА ОШИБКИ (Что если ввели странные данные?)
    // isNaN проверяет, не ввел ли человек буквы вместо цифр. Также проверяем, чтобы числа были больше нуля.
    if (name === "" || isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
        greetingEl.textContent = "Отмена операции!";
        massResultEl.textContent = "Капитан Леви недоволен. Введи правильные числа (больше нуля) и имя.";
        classificationEl.textContent = "";
        return; // Останавливаем код, чтобы он не считал дальше ошибку
    }

    // 4. МАТЕМАТИКА: ВЫЧИСЛЯЕМ МАССУ
    // Формула объема (примерно как у цилиндра): высота * (ширина * ширина) * 0.5
    let volume = height * (width * width) * 0.5;
    
    // Плотность человека примерно 1000 кг/м³, но мы знаем, что титаны аномально легкие (допустим, в 8 раз легче)
    let titanDensity = 1000 / 8; 
    
    let massKg = volume * titanDensity;
    let massTons = (massKg / 1000).toFixed(2); // Переводим в тонны и оставляем 2 знака после запятой

    // 5. УСЛОВИЯ (IF/ELSE) ДЛЯ КЛАССИФИКАЦИИ
    let classificationText = "";
    
    if (height >= 60) {
        classificationText = "⚠️ КОЛОССАЛЬНЫЙ ТИТАН! Срочно эвакуировать стену!";
        classificationEl.style.color = "#ff4c4c"; // Красный текст
    } else if (height >= 15) {
        classificationText = "Крупный аномальный титан. Потребуется команда УПМ.";
        classificationEl.style.color = "#ffaa00"; // Оранжевый текст
    } else if (height >= 5) {
        classificationText = "Средний титан. Целься точно в затылок.";
        classificationEl.style.color = "#ffff00"; // Желтый текст
    } else {
        classificationText = "Мелкий титан. Справится один кадет.";
        classificationEl.style.color = "#a0d468"; // Зеленый текст
    }

    // 6. ВЫВОД РЕЗУЛЬТАТА НА ЭКРАН (в HTML)
    greetingEl.textContent = "Привет, разведчик " + name + "!";
    massResultEl.textContent = "Истинная масса этого титана: " + massTons + " тонн.";
    classificationEl.textContent = "Классификация: " + classificationText;
});
