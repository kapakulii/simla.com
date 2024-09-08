let typeSplit = new SplitType('[intro-text]', {
    types: 'words',
    tagName: 'span'
})

// SplitText animation Type 1
gsap.from('[intro-text="late"] .word', {
    opacity: 0.1,
    duration: 3,
    ease: 'power4.inOut',
    stagger: 0.25,

    scrollTrigger: {
        trigger: '[intro-text="late"]',
        start: 'top 70% center',
        end: 'bottom 30% center',
        scrub: 4
    }
})

// SplitText animation Type 2
gsap.from('[intro-text="early"] .word', {
    opacity: 0.1,
    duration: 3,
    ease: 'power4.inOut',
    stagger: 0.25,

    scrollTrigger: {
        trigger: '[intro-text="early"]',
        start: 'top 90% center',
        end: 'bottom 60% center',
        scrub: 4
    }
})