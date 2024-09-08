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
        start: "top 80% center",
        //markers: true
    }
})