var cardFeatures = document.querySelectorAll('[crm-size-reduce]');

// Получаем общее количество элементов
var totalElements = cardFeatures.length;

gsap.utils.toArray(cardFeatures).forEach(function (element, index) {
    // Вычисляем задержку на основе индекса элемента
    var delay = index * 0.5; // Например, задержка увеличивается на 0.5 секунды для каждого следующего элемента

    gsap.to(element, {
        scale: 0.95,
        yoyo: true,
        repeat: -1,
        duration: 2,
        delay: delay // Применяем задержку к анимации
    });
});
