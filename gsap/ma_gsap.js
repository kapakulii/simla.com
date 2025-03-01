gsap.registerPlugin(ScrollTrigger);

const elements = document.querySelectorAll('.ma-tools_img-cover');
const shifts = ['5rem', '-3.5rem', '2rem'];

elements.forEach((el, index) => {
    gsap.to(el, {
        y: shifts[index],
        scrollTrigger: {
            trigger: '[ma-cover-image="scroll-trigger"]',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2
        }
    });
});