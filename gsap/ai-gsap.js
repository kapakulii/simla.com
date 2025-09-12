document.addEventListener("DOMContentLoaded", () => {
    const items = [...document.querySelectorAll("[text-carousel]")];
    let current = 0;

    function getIndex(i) {
        return (i + items.length) % items.length;
    }

    function updatePositions() {
        const shift = window.innerWidth <= 767 ? '4.5rem' : '9rem';

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
    let isMobile = false;

    const mouseEnterHandlers = [];
    const mouseLeaveHandlers = [];

    function activate(index) {
        // Принудительно сохраняем состояние в data-атрибутах
        items.forEach((el, i) => {
            el.classList.remove("active");
            el.setAttribute('data-active', 'false');
        });

        images.forEach((el, i) => {
            el.style.zIndex = "auto";
            el.setAttribute('data-z-index', 'auto');
        });

        if (items[index]) {
            items[index].classList.add("active");
            items[index].setAttribute('data-active', 'true');
        }

        if (images[index]) {
            images[index].style.zIndex = "10";
            images[index].setAttribute('data-z-index', '10');
        }

        currentIndex = index;
    }

    function next() {
        let nextIndex = (currentIndex + 1) % items.length;
        activate(nextIndex);
    }

    function startAutoSwitch() {
        stopAutoSwitch();
        if (!isMobile) {
            intervalId = setInterval(next, 3000);
        }
    }

    function stopAutoSwitch() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function destroyCarousel() {
        stopAutoSwitch();

        items.forEach((el, i) => {
            el.classList.remove("active");
            el.setAttribute('data-active', 'false');
            if (mouseEnterHandlers[i]) {
                el.removeEventListener("mouseenter", mouseEnterHandlers[i]);
            }
            if (mouseLeaveHandlers[i]) {
                el.removeEventListener("mouseleave", mouseLeaveHandlers[i]);
            }
        });

        images.forEach((el, i) => {
            el.style.zIndex = "auto";
            el.setAttribute('data-z-index', 'auto');
        });

        mouseEnterHandlers.length = 0;
        mouseLeaveHandlers.length = 0;
        initialized = false;
    }

    function restoreState() {
        // Восстанавливаем состояние на основе data-атрибутов
        items.forEach((el, i) => {
            const isActive = el.getAttribute('data-active') === 'true';
            if (isActive) {
                el.classList.add("active");
                currentIndex = i;
            }
        });

        images.forEach((el, i) => {
            const zIndex = el.getAttribute('data-z-index');
            if (zIndex) {
                el.style.zIndex = zIndex;
            }
        });
    }

    function initCarousel() {
        const wasMobile = isMobile;
        isMobile = window.innerWidth < 768;

        if (isMobile) {
            if (initialized) {
                destroyCarousel();
            }
            return;
        }

        if (!initialized || (wasMobile && !isMobile)) {
            destroyCarousel(); // очищаем предыдущее состояние

            items.forEach((item, i) => {
                const enterHandler = () => {
                    stopAutoSwitch();
                    activate(i);
                };
                const leaveHandler = () => {
                    startAutoSwitch();
                };

                item.addEventListener("mouseenter", enterHandler, { passive: true });
                item.addEventListener("mouseleave", leaveHandler, { passive: true });

                mouseEnterHandlers[i] = enterHandler;
                mouseLeaveHandlers[i] = leaveHandler;
            });

            activate(0);
            startAutoSwitch();
            initialized = true;
        }
    }

    // Обработчик для восстановления состояния при возвращении в видимую область
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.hasAttribute('data-active')) {
                restoreState();
            }
        });
    });

    // Отслеживаем видимость контейнера
    const container = document.querySelector('.cb-select') || document.body;
    intersectionObserver.observe(container);

    initCarousel();
    window.addEventListener("resize", () => {
        // Добавляем небольшую задержку для стабильности на iOS
        setTimeout(initCarousel, 100);
    });

    // Дополнительная проверка состояния при фокусе страницы
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            setTimeout(restoreState, 100);
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".cb-select_item-wrapper");

    let touchStartY = 0;
    let touchMoved = false;
    let touchStartTime = 0;
    let mobileInitialized = false;

    function clearActive() {
        wrappers.forEach(w => {
            w.classList.remove("active");
            w.setAttribute('data-mobile-active', 'false');

            const img = w.querySelector(".cb-features_img-mobile");
            const arrow = w.querySelector(".cb-features_arrow");

            if (img) {
                img.classList.remove("active");
                img.setAttribute('data-mobile-active', 'false');
            }
            if (arrow) {
                arrow.classList.remove("active");
                arrow.setAttribute('data-mobile-active', 'false');
            }
        });
    }

    function handleClick(wrapper) {
        const isActive = wrapper.classList.contains("active");

        clearActive();

        if (!isActive) {
            wrapper.classList.add("active");
            wrapper.setAttribute('data-mobile-active', 'true');

            const img = wrapper.querySelector(".cb-features_img-mobile");
            const arrow = wrapper.querySelector(".cb-features_arrow");

            if (img) {
                img.classList.add("active");
                img.setAttribute('data-mobile-active', 'true');
            }
            if (arrow) {
                arrow.classList.add("active");
                arrow.setAttribute('data-mobile-active', 'true');
            }
        }
    }

    function restoreMobileState() {
        wrappers.forEach(wrapper => {
            const isActive = wrapper.getAttribute('data-mobile-active') === 'true';
            if (isActive) {
                wrapper.classList.add("active");

                const img = wrapper.querySelector(".cb-features_img-mobile");
                const arrow = wrapper.querySelector(".cb-features_arrow");

                if (img && img.getAttribute('data-mobile-active') === 'true') {
                    img.classList.add("active");
                }
                if (arrow && arrow.getAttribute('data-mobile-active') === 'true') {
                    arrow.classList.add("active");
                }
            }
        });
    }

    function touchStartHandler(e) {
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
        touchMoved = false;
    }

    function touchMoveHandler(e) {
        const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
        const deltaTime = Date.now() - touchStartTime;

        // Более точное определение скролла vs тапа
        if (deltaY > 10 || deltaTime > 500) {
            touchMoved = true;
        }
    }

    function clickHandler(e) {
        if (window.innerWidth <= 767 && !touchMoved) {
            e.preventDefault();
            e.stopPropagation();
            handleClick(e.currentTarget);
        }
    }

    function destroyMobile() {
        wrappers.forEach(wrapper => {
            wrapper.removeEventListener("touchstart", touchStartHandler);
            wrapper.removeEventListener("touchmove", touchMoveHandler);
            wrapper.removeEventListener("click", clickHandler);
        });
        mobileInitialized = false;
    }

    function initMobile() {
        if (window.innerWidth <= 767) {
            if (!mobileInitialized) {
                wrappers.forEach(wrapper => {
                    wrapper.addEventListener("touchstart", touchStartHandler, { passive: true });
                    wrapper.addEventListener("touchmove", touchMoveHandler, { passive: true });
                    wrapper.addEventListener("click", clickHandler);
                });

                if (wrappers.length > 0) {
                    handleClick(wrappers[0]);
                }

                mobileInitialized = true;
            }
        } else {
            if (mobileInitialized) {
                clearActive();
                destroyMobile();
            }
        }
    }

    // Intersection Observer для мобильных элементов
    const mobileObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && window.innerWidth <= 767) {
                setTimeout(restoreMobileState, 50);
            }
        });
    });

    wrappers.forEach(wrapper => {
        mobileObserver.observe(wrapper);
    });

    initMobile();

    window.addEventListener("resize", () => {
        setTimeout(initMobile, 100);
    });

    // Восстановление состояния при возвращении фокуса
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden && window.innerWidth <= 767) {
            setTimeout(restoreMobileState, 100);
        }
    });
});