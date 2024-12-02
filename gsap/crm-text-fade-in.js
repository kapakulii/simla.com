let typeSplit = new SplitType('[crm-intro-text]', {
    types: 'words',
    tagName: 'span'
});

const element = document.querySelectorAll(`[crm-intro-text]`);

gsap.set(element, {
    opacity: 1,
});

gsap.fromTo(`[crm-intro-text] .word`, {
    opacity: 0.1,
},
    {
        opacity: 1,
        duration: 3,
        ease: 'power4.inOut',
        stagger: 0.25,
        scrollTrigger: {
            trigger: '[trigger-intro-text]',
            start: 'top top',
            end: 'bottom center',
            scrub: 10,
            //markers: true
        }
    });