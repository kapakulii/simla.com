let typeSplit = new SplitType('[intro-text]', {
    types: 'words',
    tagName: 'span'
});

// Функция для создания анимации
function createScrollAnimation(attr, startPos, endPos) {
    const elements = document.querySelectorAll(`[intro-text="${attr}"]`);

    if (elements.length > 0) {
        // Устанавливаем начальное состояние только для нужных слов
        gsap.set(`[intro-text="${attr}"] .word`, { opacity: 0.1 });

        gsap.to(`[intro-text="${attr}"] .word`, {
            opacity: 1,
            duration: 3,
            ease: 'power4.inOut',
            stagger: 0.25,
            scrollTrigger: {
                trigger: elements[0], // Берём первый найденный элемент
                start: startPos,
                end: endPos,
                scrub: 4
            }
        });
    }
}

// Проверяем, есть ли элементы перед запуском анимации
if (document.querySelector('[intro-text="late"]')) {
    createScrollAnimation('late', 'top 70% center', 'bottom 30% center');
}

if (document.querySelector('[intro-text="early"]')) {
    createScrollAnimation('early', 'top 90% center', 'bottom 60% center');
}