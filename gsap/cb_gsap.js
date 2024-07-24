// GSAP animation
let mediaScreen = gsap.matchMedia();

const duration = 1;
const ease = "power3.inOut";

gsap.defaults({
    ease: ease,
    duration: duration
});

let preLoadElement = document.querySelectorAll(
    ".cb-features_hero-line, .img-full");

gsap.set(preLoadElement, {
    opacity: 1
});

//Section_CB-CTA animation
let mobileImg = document.querySelectorAll('[mobile-img]');
let desktopImg = document.querySelectorAll('[desktop-img]');
let cloudImg = document.querySelectorAll('[cloud-img]');

gsap.to(mobileImg, {
    rotate: 2,
    repeat: -1,
    yoyo: true,
    duration: duration * 3,
    ease: "power1.inOut"
})

gsap.to(desktopImg, {
    rotate: -2,
    repeat: -1,
    yoyo: true,
    duration: duration * 3,
    ease: "power1.inOut"
});

function startCloudAnimation() {
    gsap.to(cloudImg, {
        x: "0.25rem",
        rotate: 0.75,
        scale: 0.99,
        repeat: 3,
        yoyo: true,
        duration: 0.3,
        ease: "power1.inOut"
    });
}

startCloudAnimation();

// Запускать анимацию каждые 4 секунды (4000 миллисекунд)
setInterval(startCloudAnimation, 4000);
