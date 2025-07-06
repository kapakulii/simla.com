// Скрываем все элементы изначально
gsap.set('[cb-text-img]', {
    autoAlpha: 0,
    y: '-1rem'
});

// Создаём бесконечно повторяющийся таймлайн
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

// Пауза 0.5 секунды в начале
tl.to({}, { duration: 0.5 })

    // Появление по очереди
    .to('[cb-text-img]', {
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.1,
        ease: 'power2.out'
    })

    // Пауза 3 секунды после появления всех
    .to({}, { duration: 3 })

    // Исчезновение без stagger
    .to('[cb-text-img]', {
        autoAlpha: 0,
        y: '0.5rem',
        duration: 0.35,
        ease: 'power2.inOut'
    });