document.addEventListener("DOMContentLoaded", () => {
    const items = [...document.querySelectorAll("[text-carousel]")];
    let current = 0;

    function getIndex(i) {
        return (i + items.length) % items.length;
    }

    function updatePositions() {
        const shift = window.innerWidth <= 767 ? '4.5rem' : '9rem'; // адаптивное смещение

        items.forEach((el, i) => {
            const relativeIndex = (i - current + items.length) % items.length;

            if (relativeIndex === 0) {
                gsap.to(el, { top: "47%", scale: 1, opacity: 1, duration: 1, ease: "power3.inOut" });
            } else if (relativeIndex === 1) {
                gsap.to(el, { top: `calc(47% + ${shift})`, scale: 0.7, opacity: 0.1, duration: 1, ease: "power3.inOut" });
            } else if (relativeIndex === 2) {
                gsap.to(el, { top: `calc(47% - ${shift})`, scale: 0.7, opacity: 0.1, duration: 1, ease: "power3.inOut" });
            }
        });
    }

    function next() {
        current = getIndex(current + 1);
        updatePositions();
    }

    updatePositions();
    setInterval(next, 1500);

    // обновляем позиции при изменении размера окна
    window.addEventListener("resize", updatePositions);
});


gsap.timeline({ repeat: -1, repeatDelay: 2 })
    .to(".cb-cta_msg-img", {
        x: "0.25rem",
        rotate: 1,
        repeat: 3,
        yoyo: true,
        duration: 0.2
    });

document.addEventListener("DOMContentLoaded", () => {
    const items = [...document.querySelectorAll(".cb-select_item-wrapper")];
    const images = [...document.querySelectorAll(".cb-features_img")];

    let currentIndex = 0;
    let intervalId = null;
    let initialized = false;

    // храним функции для удаления обработчиков
    const mouseEnterHandlers = [];
    const mouseLeaveHandlers = [];

    function activate(index) {
        items.forEach(el => el.classList.remove("active"));
        images.forEach(el => (el.style.zIndex = "auto"));

        items[index].classList.add("active");
        images[index].style.zIndex = "10";

        currentIndex = index;
    }

    function next() {
        let nextIndex = (currentIndex + 1) % items.length;
        activate(nextIndex);
    }

    function startAutoSwitch() {
        stopAutoSwitch();
        intervalId = setInterval(next, 3000);
    }

    function stopAutoSwitch() {
        clearInterval(intervalId);
        intervalId = null;
    }

    function destroyCarousel() {
        stopAutoSwitch();
        items.forEach(el => el.classList.remove("active"));
        images.forEach(el => (el.style.zIndex = "auto"));

        // удаляем обработчики
        items.forEach((item, i) => {
            item.removeEventListener("mouseenter", mouseEnterHandlers[i]);
            item.removeEventListener("mouseleave", mouseLeaveHandlers[i]);
        });

        initialized = false;
    }

    function initCarousel() {
        if (window.innerWidth < 768) {
            if (initialized) destroyCarousel();
            return;
        }

        if (!initialized) {
            // создаём обработчики и сохраняем их для удаления
            items.forEach((item, i) => {
                const enterHandler = () => {
                    stopAutoSwitch();
                    activate(i);
                };
                const leaveHandler = () => {
                    startAutoSwitch();
                };

                item.addEventListener("mouseenter", enterHandler);
                item.addEventListener("mouseleave", leaveHandler);

                mouseEnterHandlers[i] = enterHandler;
                mouseLeaveHandlers[i] = leaveHandler;
            });

            activate(0);
            startAutoSwitch();
            initialized = true;
        }
    }

    initCarousel();
    window.addEventListener("resize", () => initCarousel());
});

document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".cb-select_item-wrapper");

    function clearActive() {
        wrappers.forEach(w => {
            w.classList.remove("active");
            w.querySelector(".cb-features_img-mobile")?.classList.remove("active");
            w.querySelector(".cb-features_arrow")?.classList.remove("active");
        });
    }

    function handleClick(wrapper) {
        // Если уже активен — снимаем active у всех
        if (wrapper.classList.contains("active")) {
            clearActive();
            return;
        }

        // Иначе активируем только кликнутый
        clearActive();
        wrapper.classList.add("active");
        wrapper.querySelector(".cb-features_img-mobile")?.classList.add("active");
        wrapper.querySelector(".cb-features_arrow")?.classList.add("active");
    }

    function clickHandler(e) {
        if (window.innerWidth <= 767) {
            handleClick(e.currentTarget);
        }
    }

    function initMobile() {
        if (window.innerWidth <= 767) {
            wrappers.forEach(wrapper => {
                wrapper.addEventListener("click", clickHandler);
            });

            // по умолчанию активируем первый
            if (wrappers.length > 0) {
                handleClick(wrappers[0]);
            }
        } else {
            clearActive();
            wrappers.forEach(wrapper => {
                wrapper.removeEventListener("click", clickHandler);
            });
        }
    }

    initMobile();
    window.addEventListener("resize", initMobile);
});