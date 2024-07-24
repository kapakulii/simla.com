//Анимируем элемент Calendo
const triggerElement = document.querySelector('[dropdown-calendly="trigger"]');
const contentElement = document.querySelector('[dropdown-calendly="container"]');

gsap.set(contentElement, {
    autoAlpha: 0,
    display: 'flex',
    y: '-3rem',
    x: '2rem',
    scale: 0.8
});

let isAnimating = false;
let timer = null;
const delay = 2000; // 2 секунды в миллисекундах

const startHideTimer = () => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        if (!isAnimating) {
            hideContentElement();
        }
    }, delay);
};

const showContentElement = () => {
    gsap.to(contentElement, {
        autoAlpha: 1,
        duration: 0.5,
        y: '0rem',
        x: '0rem',
        scale: 1,
        ease: "elastic.out(1, 0.5)"
    });
};

const hideContentElement = () => {
    isAnimating = true;
    gsap.to(contentElement, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
            gsap.set(contentElement, {
                y: '-3rem',
                x: '2rem',
                scale: 0.8,
            });
            isAnimating = false;
        }
    });
};

triggerElement.addEventListener('mouseenter', () => {
    if (!isAnimating) {
        showContentElement();
    }
    if (timer) {
        clearTimeout(timer);
    }
});

triggerElement.addEventListener('mouseleave', startHideTimer);
contentElement.addEventListener('mouseleave', startHideTimer);

document.addEventListener('click', (event) => {
    if (!contentElement.contains(event.target) && !triggerElement.contains(event.target) && !
        isAnimating) {
        hideContentElement();
    }
});

contentElement.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Отключаем скролл, если мобильное меню открыто
const burger = document.querySelector('.header_burger-wrapper');
const mobileMenuContainer = document.querySelector('.header_mobile-menu-container');

function toggleBodyOverflow() {
    const displayStyle = window.getComputedStyle(mobileMenuContainer).display;
    if (displayStyle === 'flex') {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
}

burger.addEventListener('click', function () {
    const displayStyle = window.getComputedStyle(mobileMenuContainer).display;
    if (displayStyle === 'flex') {
        mobileMenuContainer.style.display = 'none';
    } else {
        mobileMenuContainer.style.display = 'flex';
    }
    toggleBodyOverflow();
});

const observer = new MutationObserver(toggleBodyOverflow);
observer.observe(mobileMenuContainer, { attributes: true, attributeFilter: ['style'] });
