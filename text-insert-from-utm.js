// Функция для получения значения параметра из URL
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var url = window.location.href;
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Функция для вставки значения параметра `utm_term` в элемент с атрибутом text-insert="utm_term"
function insertText() {
    var keyword = getParameterByName('utm_term');
    if (keyword) {
        var element = document.querySelector('[text-insert="utm_term"]');
        if (element) {
            element.textContent = keyword;
        }
    }
}

// Запускаем функцию сразу
insertText();
