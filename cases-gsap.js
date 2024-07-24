// GSAP animation
let casesScreen = gsap.matchMedia();

const duration = 1;
const ease = "power3.inOut";

gsap.defaults({
    ease: ease,
    duration: duration
});

// Desktop
casesScreen.add("(min-width: 768px)", (context) => {
    // Анимация для контейнеров cases
    const casesContainer = document.querySelectorAll('.cases_container');

    casesContainer.forEach(container => {
        container.dataset.initialBgColor = window.getComputedStyle(container).backgroundColor;
        container.dataset.initialScale = 1;
    });

    const onMouseEnterContainer = function (event) {
        const container = event.currentTarget;
        gsap.to(container, {
            scale: 1.05,
            duration: duration / 3
        });

        casesContainer.forEach(sibling => {
            if (sibling !== container) {
                gsap.to(sibling, {
                    scale: 0.95,
                    backgroundColor: '#C7C6C6',
                    duration: duration / 3
                });
            }
        });
    };

    const onMouseLeaveContainer = function (event) {
        const container = event.currentTarget;
        gsap.to(container, {
            scale: container.dataset.initialScale,
            duration: duration / 3
        });

        casesContainer.forEach(sibling => {
            if (sibling !== container) {
                gsap.to(sibling, {
                    scale: sibling.dataset.initialScale,
                    backgroundColor: sibling.dataset.initialBgColor,
                    duration: duration / 3
                });
            }
        });
    };

    casesContainer.forEach(container => {
        container.addEventListener('mouseenter', onMouseEnterContainer);
        container.addEventListener('mouseleave', onMouseLeaveContainer);
    });

    // Функция очистки
    return () => {
        // Удаляем обработчики событий casesContainer
        casesContainer.forEach(container => {
            container.removeEventListener('mouseenter', onMouseEnterContainer);
            container.removeEventListener('mouseleave', onMouseLeaveContainer);
        });
    };
    //
    //
    //
    //
    //
    // End desktop animate
});
