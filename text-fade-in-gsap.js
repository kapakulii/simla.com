let typeSplit = new SplitType('[intro-text]', {
    types: 'words',
    tagName: 'span'
});

// Функция для создания анимации
function createScrollAnimation(attr, startPos, endPos) {
    const element = document.querySelectorAll(`[intro-text="${attr}"]`);

    if (element) {
        gsap.from(`[intro-text="${attr}"] .word`, {
            opacity: 0.1,
            duration: 3,
            ease: 'power4.inOut',
            stagger: 0.25,
            scrollTrigger: {
                trigger: element,
                start: startPos,
                end: endPos,
                scrub: 4
            }
        });
    }
}

// Запуск анимаций для разных элементов
//Запустить позднее (Mobile)
createScrollAnimation('late', 'top 70% center', 'bottom 30% center');
//Запустить раньше (Home)
createScrollAnimation('early', 'top 90% center', 'bottom 60% center');