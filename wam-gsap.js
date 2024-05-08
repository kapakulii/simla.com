// // GSAP animation
// // Global animation
// let mediaScreen = gsap.matchMedia();

// // Hero animation
// const elements = document.querySelectorAll('.wam-hero_mobile-img');
// const totalElements = elements.length;

// const wamHeroTimeLine = gsap.timeline({ repeat: -1 });

// elements.forEach((element, index) => {
//   const nextIndex = (index + 1) % totalElements;
//   const nextElement = elements[nextIndex];

//   wamHeroTimeLine.from(element, { x: '6%', autoAlpha: 0 }, index === 0 ? '+=0' :
//     '-=1')
//     .to(element, { x: '-3%', autoAlpha: 0, delay: duration * 1.5 });
// });

// // Desktop
// mediaScreen.add("(min-width: 768px)", () => {
//   //Steps Card animation
//   const cards = document.querySelectorAll('.wam-steps_img-hero');

//   const wamCardsTimeLine = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".wam-steps_img-wrapper",
//       start: 'top 90%',
//       toggleActions: 'play none none reverse'
//     },
//     defaults: {
//       duration: duration * 1.5
//     }
//   });

//   wamCardsTimeLine.to(cards[0], { x: "-14rem", rotate: -4 })
//     .to(cards[1], { x: "14rem", rotate: 4 }, "<")
//     .to(cards[2], { x: "-28rem", rotate: -8 }, "<")
//     .to(cards[3], { x: "28rem", rotate: 8 }, "<")
//     .to(cards[4], { y: "2rem" }, "<");
// });

// // Mobile
// mediaScreen.add("(max-width: 767px)", () => {
//   //Steps Card animation
//   const cards = document.querySelectorAll('.wam-steps_img-hero');

//   const wamCardsTimeLine = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".wam-steps_img-wrapper",
//       start: 'top 70%',
//       toggleActions: 'play none none reverse'
//     },
//     defaults: {
//       duration: duration * 2
//     }
//   });

//   wamCardsTimeLine.to(cards[0], { x: "2rem", y: "-1rem", rotate: 8 })
//     .to(cards[1], { x: "0.5rem", y: "1rem", rotate: 6, scale: 0.95 }, "<")
//     .to(cards[2], { x: "-1rem", y: "3rem", rotate: 4, scale: 0.9 }, "<")
//     .to(cards[3], { x: "-2.5rem", y: "5rem", rotate: 2, scale: 0.85 }, "<")
//     .to(cards[4], { x: "-4rem", y: "7rem", scale: 0.8 }, "<");

// });

// GSAP animation
let mediaScreen = gsap.matchMedia();

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

// Hero animation
const elements = document.querySelectorAll('.wam-hero_mobile-img');
const totalElements = elements.length;

const wamHeroTimeLine = gsap.timeline({ repeat: -1 });

elements.forEach((element, index) => {
  const nextIndex = (index + 1) % totalElements;
  const nextElement = elements[nextIndex];

  wamHeroTimeLine.from(element, { x: '6%', autoAlpha: 0 }, index === 0 ? '+=0' :
    '-=1')
    .to(element, { x: '-3%', autoAlpha: 0, delay: duration * 1.5 });
});

//Cases animation
document.querySelectorAll('.cases_link-wrapp').forEach(wrap => {

  wrap.addEventListener('mouseenter', () => {
    gsap.to(wrap, {
      scale: 0.95,
      duration: duration / 2.5
    });
  });

  wrap.addEventListener('mouseleave', () => {
    gsap.to(wrap, {
      scale: 1,
      duration: duration / 2.5
    });
  });
});

// Desktop
mediaScreen.add("(min-width: 768px)", () => {
  //Steps Card animation
  const cards = document.querySelectorAll('.wam-steps_img-hero');

  const wamCardsTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".wam-steps_img-wrapper",
      start: 'top 90%',
      toggleActions: 'play none none reverse'
    },
    defaults: {
      duration: duration * 1.5
    }
  });

  wamCardsTimeLine.to(cards[0], { x: "-14rem", rotate: -4 })
    .to(cards[1], { x: "14rem", rotate: 4 }, "<")
    .to(cards[2], { x: "-28rem", rotate: -8 }, "<")
    .to(cards[3], { x: "28rem", rotate: 8 }, "<")
    .to(cards[4], { y: "2rem" }, "<");
});

// Mobile
mediaScreen.add("(max-width: 767px)", () => {
  //Steps Card animation
  const cards = document.querySelectorAll('.wam-steps_img-hero');

  const wamCardsTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".wam-steps_img-wrapper",
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    defaults: {
      duration: duration * 2
    }
  });

  wamCardsTimeLine.to(cards[0], { x: "2rem", y: "-1rem", rotate: 8 })
    .to(cards[1], { x: "0.5rem", y: "1rem", rotate: 6, scale: 0.95 }, "<")
    .to(cards[2], { x: "-1rem", y: "3rem", rotate: 4, scale: 0.9 }, "<")
    .to(cards[3], { x: "-2.5rem", y: "5rem", rotate: 2, scale: 0.85 }, "<")
    .to(cards[4], { x: "-4rem", y: "7rem", scale: 0.8 }, "<");

});
