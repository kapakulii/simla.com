// GSAP animation
let mediaScreen = gsap.matchMedia();

// Desktop
mediaScreen.add("(min-width: 768px)", (context) => {
    // Guides Card animation
    const cards = document.querySelectorAll('.wab-guide_img.back');
    const guideGroupFirst = document.querySelectorAll('[card-group-guide="1"]');
    const guideFirst = document.querySelectorAll('[card-guide="1"]');
    const guideGroupSecond = document.querySelectorAll('[card-group-guide="2"]');
    const guideSecond = document.querySelectorAll('[card-guide="2"]');

    guideGroupFirst.forEach((guide) => {
        const tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: duration / 1.75
            }
        });

        tl.to(guideFirst, { scale: 0.95 })
            .to(cards[0], { x: "-16rem", y: "2rem", rotate: -4, scale: 0.7 }, "<")
            .to(cards[1], { x: "-8rem", y: "1rem", rotate: -2, scale: 0.85 }, "<");

        guide.addEventListener('mouseenter', () => tl.play());
        guide.addEventListener('mouseleave', () => tl.reverse());
    });

    guideGroupSecond.forEach((guide) => {
        const tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: duration / 1.75
            }
        });

        tl.to(guideSecond, { scale: 0.95 })
            .to(cards[2], { x: "16rem", y: "2rem", rotate: 4, scale: 0.7 }, "<")
            .to(cards[3], { x: "8rem", y: "1rem", rotate: 2, scale: 0.85 }, "<");

        guide.addEventListener('mouseenter', () => tl.play());
        guide.addEventListener('mouseleave', () => tl.reverse());
    });

    // Эффект тряски
    function startCardAnimation(elements) {
        gsap.to(elements, {
            x: "0.25rem",
            rotate: 2,
            repeat: 3,
            yoyo: true,
            duration: duration / 5
        });
    }

    let shakeInterval = setInterval(() => {
        startCardAnimation(guideFirst);
        setTimeout(() => startCardAnimation(guideSecond), 3000);
    }, 6000);

    // Запуск анимации сразу при загрузке
    startCardAnimation(guideFirst);
    setTimeout(() => startCardAnimation(guideSecond), 3000);

    //
    //
    //
    //
    //
    // End desktop animate
});

// Mobile
mediaScreen.add("(max-width: 767px)", () => {
    // Guides Card animation
    const cards = document.querySelectorAll('.wab-guide_img.back');
    const guideGroupFirst = document.querySelectorAll('[card-group-guide="1"]');
    const guideFirst = document.querySelectorAll('[card-guide="1"]');
    const guideGroupSecond = document.querySelectorAll('[card-group-guide="2"]');
    const guideSecond = document.querySelectorAll('[card-guide="2"]');

    guideGroupFirst.forEach((guide) => {
        const tl = gsap.timeline({
            defaults: {},
            scrollTrigger: {
                trigger: guide,
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.to(guideFirst, { scale: 0.95 })
            .to(cards[0], { x: "-4rem", y: "2rem", rotate: -4, scale: 0.7 }, "<")
            .to(cards[1], { x: "-2rem", y: "1rem", rotate: -2, scale: 0.85 }, "<");
    });

    guideGroupSecond.forEach((guide) => {
        const tl = gsap.timeline({
            defaults: {},
            scrollTrigger: {
                trigger: guide,
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.to(guideSecond, { scale: 0.95 })
            .to(cards[2], { x: "4rem", y: "2rem", rotate: 4, scale: 0.7 }, "<")
            .to(cards[3], { x: "2rem", y: "1rem", rotate: 2, scale: 0.85 }, "<");
    });

    //
    //
    //
    //
    //
    // End mobile animate
});
