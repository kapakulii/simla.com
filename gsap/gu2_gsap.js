// GSAP animation
let mediaScreen = gsap.matchMedia();

// Global
// Timer animation
function startTimer(duration, display) {
    let timer = duration,
        hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

const timerElement = document.querySelector("[gu-timer]");
if (timerElement) {
    const duration = 24 * 60 * 60; // 24 часа в секундах
    startTimer(duration, timerElement);
}

const clockElement = document.querySelector("[gu-clock]");
if (clockElement) {
    gsap.to(clockElement, {
        rotation: "-=360",
        transformOrigin: "50% 50%",
        duration: 60,
        repeat: -1,
        ease: "none"
    });
}

//
//
//
//
// End global animate

// Desktop
mediaScreen.add("(min-width: 768px)", (context) => {
    // Guides Card animation
    const cards = document.querySelectorAll('.gu2-guide_img.back');
    const guideGroupFirst = document.querySelectorAll('[card-group-guide="1"]');
    const guideFirst = document.querySelectorAll('[card-guide="1"]');

    guideGroupFirst.forEach((guide) => {
        const tl = gsap.timeline({
            defaults: {
                duration: duration * 2
            }
        });

        tl.to(guideFirst, { scale: 0.95 })
            .to(cards[0], { x: "16rem", y: "2rem", rotate: 4, scale: 0.7 }, "<")
            .to(cards[1], { x: "8rem", y: "1rem", rotate: 2, scale: 0.85 }, "<");
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
    const cards = document.querySelectorAll('.gu2-guide_img.back');
    const guideGroupFirst = document.querySelectorAll('[card-group-guide="1"]');
    const guideFirst = document.querySelectorAll('[card-guide="1"]');

    guideGroupFirst.forEach((guide) => {
        const tl = gsap.timeline({
            defaults: {
                duration: duration * 2
            }
        });

        tl.to(guideFirst, { scale: 0.95 })
            .to(cards[0], { x: "4rem", y: "2rem", rotate: 4, scale: 0.7 }, "<")
            .to(cards[1], { x: "2rem", y: "1rem", rotate: 2, scale: 0.85 }, "<");
    });

    //
    //
    //
    //
    //
    // End mobile animate
});
