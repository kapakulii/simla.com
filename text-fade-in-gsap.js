imagesLoaded(document.querySelector('body'), { background: true }, function () {
    // После того, как все картинки (и ленивые) загрузились — запускаем SplitType и анимации
    let typeSplit = new SplitType('[intro-text]', {
        types: 'words',
        tagName: 'span'
    });

    function createScrollAnimation(attr, startPos, endPos) {
        const elements = document.querySelectorAll(`[intro-text="${attr}"]`);

        elements.forEach((el) => {
            gsap.set(el.querySelectorAll('.word'), { opacity: 0.1 });

            gsap.to(el.querySelectorAll('.word'), {
                opacity: 1,
                duration: 3,
                ease: 'power4.inOut',
                stagger: 0.25,
                scrollTrigger: {
                    trigger: el,
                    start: startPos,
                    end: endPos,
                    scrub: 4
                }
            });
        });
    }

    if (document.querySelectorAll('[intro-text="late"]').length) {
        createScrollAnimation('late', 'top 70% center', 'bottom 30% center');
    }

    if (document.querySelectorAll('[intro-text="early"]').length) {
        createScrollAnimation('early', 'top 90% center', 'bottom 60% center');
    }
});