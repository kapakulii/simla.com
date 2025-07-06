gsap.registerPlugin(ScrollTrigger);

// Ждём загрузки всех изображений (включая lazy)
imagesLoaded(document.body, { background: true }, function () {
    const elements = document.querySelectorAll('.ma-tools_img-cover');
    const shifts = ['5rem', '-3.5rem', '2rem'];

    elements.forEach((el, index) => {
        gsap.to(el, {
            y: shifts[index % shifts.length], // если больше 3 элементов
            scrollTrigger: {
                trigger: '[ma-cover-image="scroll-trigger"]',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2,
                markers: true
            }
        });
    });

    // Пересчитываем ScrollTrigger после загрузки
    ScrollTrigger.refresh();
});