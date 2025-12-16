// ФУНКЦИЯ ДЛЯ ФОРМАТИРОВАНИЯ И ОТОБРАЖЕНИЯ ТЕКУЩЕЙ ДАТЫ
function displayCurrentDate() {
    // СОЗДАЁМ НОВЫЙ ОБЪЕКТ ДАТЫ С ТЕКУЩИМ ВРЕМЕНЕМ
    const currentDate = new Date();
    
    // МЕНЯЕМ НАСТРОЙКИ ФОРМАТА ДАТЫ
    const dateOptions = { 
        day: '2-digit',   // ЧИСЛО МЕСЯЦА С НУЛЁМ (01-31)
        month: '2-digit', // МЕСЯЦ С НУЛЁМ (01-12)  
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
    const topLeftBlock = document.querySelector('.top-left .current-date');
    // ДОБАВЛЯЕМ ЭЛЕМЕНТ С ДАТОЙ В НАЧАЛО ВЕРХНЕЙ ПАНЕЛИ (ПЕРЕД ПЕРВЫМ РЕБЁНКОМ)
    topLeftBlock.textContent = formattedDate;;
}

// ВЫПОЛНЯЕМ ФУНКЦИЮ ОТОБРАЖЕНИЯ ДАТЫ, КОГДА ВЕСЬ HTML ЗАГРУЗИЛСЯ
document.addEventListener('DOMContentLoaded', displayCurrentDate);