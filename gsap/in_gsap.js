let mediaScreen = gsap.matchMedia();
let heroImg = document.querySelectorAll('.in-hero_img.message');

gsap.fromTo(heroImg, {
    opacity: 0,
    y: "1rem",
    x: "-0.25rem"
}, {
    opacity: 1,
    y: "0rem",
    x: "0rem",
    ease: "power1.inOut",
    duration: 1,
    stagger: .5,
    scrollTrigger: {
        trigger: heroImg,
        start: "top 80% center",
        //markers: true
    }
})

mediaScreen.add("(min-width: 768px)", (context) => {
    let featuresImg = document.querySelectorAll(".in-features_secondary-img");

    gsap.to(featuresImg, {
        y: '-2rem',
        stagger: {
            amount: .35
        },
        scrollTrigger: {
            trigger: ".in-features_container",
            start: "top 80% bottom",
            end: "bottom 20% top",
            scrub: 3,
            //markers: true
        }
    })

    // Функция для обновления ScrollTrigger после загрузки изображений
    function updateScrollTriggersOnLoad() {
        ScrollTrigger.refresh(true); // Перезапуск ScrollTrigger с обновлением всех триггеров
    }

    // Использование imagesLoaded для отслеживания завершения загрузки всех изображений
    imagesLoaded(document.querySelector('body'), function () {
        updateScrollTriggersOnLoad();
    });
})

mediaScreen.add("(max-width: 767px)", (context) => {
    let featuresImg1 = document.querySelectorAll('[in-features-animation="step-1"]');
    let featuresImg2 = document.querySelectorAll('[in-features-animation="step-2"]');

    // Функция для анимации изображений
    function animateFeatures() {
        const tlFeaturesImg1 = gsap.timeline({
            repeat: -1,
            repeatDelay: 1.5, // Задержка между повторениями
            yoyo: true
        });

        tlFeaturesImg1.fromTo(featuresImg1, { autoAlpha: 0, y: "-1.5rem" }, { autoAlpha: 1, y: "0rem", stagger: { amount: .2 }, duration: 0.8, delay: .25 });

        const tlFeaturesImg2 = gsap.timeline({
            delay: 2.45, // Задержка перед началом анимации
            repeat: -1,
            repeatDelay: 1.5,
            yoyo: true
        });

        tlFeaturesImg2.fromTo(featuresImg2, { autoAlpha: 0, y: "-1.5rem" }, { autoAlpha: 1, y: "0rem", stagger: { amount: .2 }, duration: 0.8, delay: .25 });

        // Запускаем таймлайны
        tlFeaturesImg1.play();
        tlFeaturesImg2.play();
    }

    // Вызываем функцию анимации
    animateFeatures();
});
