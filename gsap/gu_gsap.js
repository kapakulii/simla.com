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
    const guideGroupThird = document.querySelectorAll('[card-group-guide="3"]');
    const guideThird = document.querySelectorAll('[card-guide="3"]');

    function createGuideTimeline(guideEls, card1, card2) {
        return gsap.timeline({ defaults: { duration: duration / 1.5, ease: "back.out(1.7)" }, paused: true })
            .to(guideEls, { scale: 0.95, ease: "power2.out" })
            .to(card1, { x: "-4.5rem", y: "1rem", rotate: -3, scale: 0.85 }, "<")
            .to(card2, { x: "4.5rem", y: "1rem", rotate: 3, scale: 0.85 }, "<");
    }

    const tlFirst = createGuideTimeline(guideFirst, cards[0], cards[1]);
    const tlSecond = createGuideTimeline(guideSecond, cards[2], cards[3]);
    const tlThird = createGuideTimeline(guideThird, cards[4], cards[5]);

    function setupHover(groupEls, timeline) {
        groupEls.forEach(group => {
            group.addEventListener("mouseenter", () => {
                timeline.timeScale(1).play();
            });
            group.addEventListener("mouseleave", () => {
                timeline.timeScale(2).reverse(); // чуть быстрее в обратную сторону
            });
        });
    }

    setupHover(guideGroupFirst, tlFirst);
    setupHover(guideGroupSecond, tlSecond);
    setupHover(guideGroupThird, tlThird);

    // Функция для эффекта тряски
    function startCardAnimation(elements) {
        gsap.to(elements, {
            x: "0.25rem",
            rotate: 1,
            repeat: 3,
            yoyo: true,
            duration: duration / 5
        });
    }

    // Запуск анимации через интервалы
    let shakeInterval = setInterval(() => {
        startCardAnimation(guideFirst); // t = 0
        setTimeout(() => startCardAnimation(guideSecond), 3000); // t = 3s
        setTimeout(() => startCardAnimation(guideThird), 6000); // t = 6s
    }, 9000);

    // Запуск анимации через 1 секунду после загрузки страницы
    window.onload = function () {
        setTimeout(() => {
            startCardAnimation(guideFirst);
            setTimeout(() => startCardAnimation(guideSecond), 3000);
            setTimeout(() => startCardAnimation(guideThird), 6000);
        }, 1000);
    };

    //
    //
    //
    //
    //
    // End desktop animate
});

mediaScreen.add("(max-width: 767px)", () => {
    const cards = document.querySelectorAll('.wab-guide_img.back');
    const guideGroupFirst = document.querySelectorAll('[card-group-guide="1"]');
    const guideFirst = document.querySelectorAll('[card-guide="1"]');
    const guideGroupSecond = document.querySelectorAll('[card-group-guide="2"]');
    const guideSecond = document.querySelectorAll('[card-guide="2"]');
    const guideGroupThird = document.querySelectorAll('[card-group-guide="3"]');
    const guideThird = document.querySelectorAll('[card-guide="3"]');

    function createGuideTimeline(guideEls, card1, card2) {
        return gsap.timeline({
            defaults: { duration: duration / 1.5, ease: "back.out(1.7)" },
            scrollTrigger: {
                trigger: guideEls[0],
                start: 'top 40%',
                toggleActions: 'play none none reverse',
                // markers: true, // включи для отладки, если надо
            }
        })
            .to(guideEls, { scale: 0.95, ease: "power2.out" })
            .to(card1, { x: "-3rem", y: "1rem", rotate: -3, scale: 0.85 }, "<")
            .to(card2, { x: "3rem", y: "1rem", rotate: 3, scale: 0.85 }, "<");
    }

    const tlFirst = createGuideTimeline(guideFirst, cards[0], cards[1]);
    const tlSecond = createGuideTimeline(guideSecond, cards[2], cards[3]);
    const tlThird = createGuideTimeline(guideThird, cards[4], cards[5]);
});