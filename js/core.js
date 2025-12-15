// ФУНКЦИЯ ДЛЯ ФОРМАТИРОВАНИЯ И ОТОБРАЖЕНИЯ ТЕКУЩЕЙ ДАТЫ
function displayCurrentDate() {
    // СОЗДАЁМ НОВЫЙ ОБЪЕКТ ДАТЫ С ТЕКУЩИМ ВРЕМЕНЕМ
    const currentDate = new Date();
    
    // НАСТРОЙКИ ФОРМАТА ДАТЫ ДЛЯ РУССКОГО ЯЗЫКА
    const dateOptions = { 
        weekday: 'long',  // ДЕНЬ НЕДЕЛИ ПОЛНОСТЬЮ (ПОНЕДЕЛЬНИК)
        day: 'numeric',   // ЧИСЛО МЕСЯЦА (1-31)
        month: 'long',    // МЕСЯЦ ПОЛНОСТЬЮ (ЯНВАРЯ)
        year: 'numeric'   // ГОД (2024)
    };
    
    // ПРЕОБРАЗУЕМ ДАТУ В СТРОКУ ПО РУССКИМ ПРАВИЛАМ
    const formattedDate = currentDate.toLocaleDateString('ru-RU', dateOptions);
    
    // СОЗДАЁМ HTML-ЭЛЕМЕНТ ДЛЯ ОТОБРАЖЕНИЯ ДАТЫ
    const dateElement = document.createElement('div');
    // ДОБАВЛЯЕМ КЛАСС ДЛЯ ВОЗМОЖНОСТИ СТИЛИЗАЦИИ В CSS
    dateElement.className = 'current-date';
    // ЗАПИСЫВАЕМ ОТФОРМАТИРОВАННУЮ ДАТУ В ТЕКСТ ЭЛЕМЕНТА
    dateElement.textContent = formattedDate;
    
    // НАХОДИМ ВЕРХНЮЮ ПАНЕЛЬ НА СТРАНИЦЕ ПО КЛАССУ
    const topPanel = document.querySelector('.top-panel');
    // ДОБАВЛЯЕМ ЭЛЕМЕНТ С ДАТОЙ В НАЧАЛО ВЕРХНЕЙ ПАНЕЛИ (ПЕРЕД ПЕРВЫМ РЕБЁНКОМ)
    topPanel.insertBefore(dateElement, topPanel.firstChild);
}

// ВЫПОЛНЯЕМ ФУНКЦИЮ ОТОБРАЖЕНИЯ ДАТЫ, КОГДА ВЕСЬ HTML ЗАГРУЗИЛСЯ
document.addEventListener('DOMContentLoaded', displayCurrentDate);