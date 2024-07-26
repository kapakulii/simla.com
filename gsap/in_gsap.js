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
        start: "top center"
    }
})

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
        scrub: 3
    }
})

function updateScrollTrigger() {
    ScrollTrigger.refresh();
}

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(img => {
    img.addEventListener('load', updateScrollTrigger);
});
