// GSAP animation
const duration = 1;
const ease = "power3.inOut";

gsap.defaults({
    ease: ease,
    duration: duration
});

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
});

// Global animation
const fadeOn = document.querySelectorAll('[fade-on]');

fadeOn.forEach(
    container => {
        gsap.from(container, {
            y: '1rem',
            scale: 0.98,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: container,
                start: 'top 95%',
                toggleActions: 'play none none reverse'
            }
        });
    });