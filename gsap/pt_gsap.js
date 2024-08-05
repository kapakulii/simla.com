// GSAP animation
let mediaScreen = gsap.matchMedia();

// Global
//Скрываем элементы в Sticky блоке при скролле
var sectionHero = document.querySelector('.section-pt_hero');
var priceTablet = document.querySelector('.pt-tablet_header-row');
var scrollBlocksHider = priceTablet.querySelectorAll('.pt-tablet_subheader, .btn-secondary');

// GSAP анимация
const animation = gsap.to(scrollBlocksHider, {
    autoAlpha: 0,
    height: 0,
    padding: 0,
    scrollTrigger: {
        trigger: sectionHero,
        start: "bottom 7% top",
        end: "bottom 7% top",
        toggleActions: "play none reverse none",
        invalidateOnRefresh: true
    },
});

// Promo sectionHero
var promoTag = document.querySelectorAll('.pt-promo_tag-wrapper');

gsap.from(promoTag, {
    y: '2rem',
    autoAlpha: 0,
    stagger: duration / 15,
    scrollTrigger: {
        trigger: '.pt-promo_tags-wrapper'
    }
})

// Анимируем появление всплывающих подсказок
var tabletPopups = document.querySelectorAll('.pt-tablet_popup');
var tabletPopupTriggers = document.querySelectorAll('.pt-tablet_popup-trigger');
var tabletPopupBG = document.querySelectorAll('.pt-tablet_popup-bg');
var tabletPopupCloser = document.querySelectorAll('.pt-tablet_popup-closer');

gsap.set(tabletPopups, {
    y: '1rem',
    display: 'flex',
    flexDirection: 'column',
    autoAlpha: 0,
});

//
//
//
//
// End global animate

// Desktop
mediaScreen.add("(min-width: 768px)", (context) => {
    // Анимируем появление всплывающих подсказок

    const mouseEnterHandlers = [];
    const mouseLeaveHandlers = [];

    tabletPopupTriggers.forEach(function (trigger, index) {
        gsap.killTweensOf(tabletPopups[index]);

        const onMouseEnter = function () {
            gsap.to(tabletPopups[index], {
                y: '0rem',
                autoAlpha: 1,
                duration: duration / 3,
                ease: "power1.out"
            });
        };

        const onMouseLeave = function () {
            gsap.killTweensOf(tabletPopups[index]);
            gsap.to(tabletPopups[index], {
                y: '1rem',
                autoAlpha: 0,
                duration: duration / 5,
                ease: "power1.in"
            });
        };

        trigger.addEventListener('mouseenter', onMouseEnter);
        trigger.addEventListener('mouseleave', onMouseLeave);

        // Сохраняем функции обработчиков для последующего удаления
        mouseEnterHandlers[index] = onMouseEnter;
        mouseLeaveHandlers[index] = onMouseLeave;
    });

    // Функция очистки
    return () => {
        // Удаляем обработчики событий всплывающих подсказок
        tabletPopupTriggers.forEach(function (trigger, index) {
            trigger.removeEventListener('mouseenter', mouseEnterHandlers[index]);
            trigger.removeEventListener('mouseleave', mouseLeaveHandlers[index]);
        });
    };
    //
    //
    //
    //
    //
    // End desktop animate
});

// Mobile
mediaScreen.add("(max-width: 767px)", () => {
    // Анимируем появление всплывающих подсказок
    gsap.set(tabletPopupBG, {
        display: 'block',
        autoAlpha: 0,
    });

    const showPopup = (index) => {
        gsap.to(tabletPopups[index], { autoAlpha: 1, y: 0 });
        gsap.to(tabletPopupBG[index], { autoAlpha: 1, duration: duration / 2 });
    };

    const hidePopups = () => {
        gsap.to(tabletPopups, { autoAlpha: 0, y: '1rem', duration: duration / 2 });
        gsap.to(tabletPopupBG, { autoAlpha: 0, duration: duration / 3 });
    };

    tabletPopupTriggers.forEach((trigger, index) => {
        trigger.addEventListener('click', (event) => {
            event.stopPropagation();
            showPopup(index);
        });
    });

    tabletPopupCloser.forEach((closer) => {
        closer.addEventListener('click', (event) => {
            event.stopPropagation();
            hidePopups();
        });
    });

    // Добавляем обработчик событий для клика вне popup
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.pt-tablet_popup')) {
            hidePopups();
        }
    })

    //
    //
    //
    //
    //
    // End mobile animate
});
