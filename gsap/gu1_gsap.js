// GSAP animation
let mediaScreen = gsap.matchMedia();

const duration = 1;
const ease = "power3.inOut";

gsap.defaults({
    ease: ease,
    duration: duration
});

// Global
// Button CTA animation

//
// End global animate

// Desktop
mediaScreen.add("(min-width: 768px)", (context) => {
    // Guides Card animation
    const cards = document.querySelectorAll('.gu-guide_img.back');
    const guideGroupFirst = document.querySelectorAll('[card-group-guide="1"]');
    const guideFirst = document.querySelectorAll('[card-guide="1"]');

    guideGroupFirst.forEach((guide) => {
        const tl = gsap.timeline({
            defaults: {
                duration: duration * 2
            }
        });

        tl.to(guideFirst, { scale: 0.95 })
            .to(cards[0], { x: "-16rem", y: "2rem", rotate: -4, scale: 0.7 }, "<")
            .to(cards[1], { x: "-8rem", y: "1rem", rotate: -2, scale: 0.85 }, "<");
    });

    //
    //
    //
    //
    // End desktop animate
});

// Mobile
mediaScreen.add("(max-width: 767px)", () => {
    // Guides Card animation
    const cards = document.querySelectorAll('.gu-guide_img.back');
    const guideGroupFirst = document.querySelectorAll('[card-group-guide="1"]');
    const guideFirst = document.querySelectorAll('[card-guide="1"]');

    guideGroupFirst.forEach((guide) => {
        const tl = gsap.timeline({
            defaults: {
                duration: duration * 2
            }
        });

        tl.to(guideFirst, { scale: 0.95 })
            .to(cards[0], { x: "-4rem", y: "2rem", rotate: -4, scale: 0.7 }, "<")
            .to(cards[1], { x: "-2rem", y: "1rem", rotate: -2, scale: 0.85 }, "<");
    });

    //
    //
    //
    //
    //
    // End mobile animate
});
