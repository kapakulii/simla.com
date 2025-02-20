const heroAnim = gsap.timeline({
    defaults: { duration: 1, ease: "power3.out" }
});

heroAnim.to("[hero-anim=main]", { scale: 1 }, '+0.5')
    .from("[hero-anim=left-1]", { x: '5rem', autoAlpha: 0, scale: 1.2 }, '<0.1')
    .from("[hero-anim=right-1]", { x: '-5rem', autoAlpha: 0, scale: 1.2 }, '<')
    .from("[hero-anim=left-2]", { x: '5rem', autoAlpha: 0, scale: 1.1 }, '<0.5')
    .from("[hero-anim=right-2]", { x: '-5rem', autoAlpha: 0, scale: 1.1 }, '<');