// Hero animation
let imgAppDesktop = document.querySelector('.hm-hero_img.n1');
let imgAppMobile = document.querySelector('.hm-hero_img.n2');

let imgMessage1 = document.querySelector('.hm-hero_img.n3');
let imgMessage2 = document.querySelector('.hm-hero_img.n4');
let imgMessage3 = document.querySelector('.hm-hero_img.n5');
let imgMessages = document.querySelectorAll('.hm-hero_img.n3, .hm-hero_img.n4, .hm-hero_img.n5');

let imgFedback1 = document.querySelector('.hm-hero_img.n6');
let imgFedback2 = document.querySelector('.hm-hero_img.n7');

let imgOther = document.querySelectorAll('.hm-hero_img.n6, .hm-hero_img.n7, .hm-hero_img.n2');

gsap.set('.hm-hero_img', {
    autoAlpha: 0,
    y: '2rem'
})

let heroTL = gsap.timeline({
    defaults: {
        ease: "power3.out",
    }
})

heroTL.to(imgAppDesktop, { y: '0rem', autoAlpha: 1 })
heroTL.fromTo(imgMessage1, { y: '0rem' }, { y: '0rem', autoAlpha: 1 }, "-=40%")
heroTL.to(imgMessage2, { y: '0rem', autoAlpha: 1 }, "-=90%")
heroTL.to(imgMessage3, { y: '0rem', autoAlpha: 1 }, "-=90%")
heroTL.fromTo(imgAppMobile, { y: '0rem' }, { y: '0rem', autoAlpha: 1 }, "-=60%")
heroTL.fromTo(imgFedback1, { y: '0rem', scale: 1.25 }, { y: '0rem', autoAlpha: 1, scale: 1 }, '<')
heroTL.fromTo(imgFedback2, { y: '0rem', scale: 1.25 }, { y: '0rem', autoAlpha: 1, scale: 1 }, '<');

gsap.to(imgMessages, {
    y: '8rem',
    duration: 4,
    stagger: 0.4,
    scrollTrigger: {
        trigger: imgMessage1,
        start: 'top 30% center',
        end: 'bottom 25% center',
        scrub: 8
    }
});

gsap.to(imgOther, {
    y: '1.5rem',
    duration: 4,
    scrollTrigger: {
        trigger: imgMessage1,
        start: 'top 30% center',
        end: 'bottom 25% center',
        scrub: 4
    }
});

// SplitText animation
let typeSplit = new SplitType('.hm-quote_text', {
    types: 'words',
    tagName: 'span'
})

gsap.from('.hm-quote_text .word', {
    opacity: 0.1,
    duration: 3,
    ease: 'power4.inOut',
    stagger: 0.25,

    scrollTrigger: {
        trigger: '.hm-quote_text',
        start: 'top 80% center',
        end: 'bottom center',
        scrub: 4
    }
})