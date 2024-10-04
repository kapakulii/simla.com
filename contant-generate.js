// Создание содержания из заголовков H2 внутри .rich-text-global

document.addEventListener("DOMContentLoaded", function () {
    const richTextGlobal = document.querySelector('.rich-text-global');

    if (richTextGlobal) {
        const headings = richTextGlobal.querySelectorAll('h2');
        const toc = document.querySelector('#toc');

        if (toc && headings.length > 0) {
            headings.forEach((heading, index) => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.textContent = heading.textContent;
                anchor.style.cursor = 'pointer';

                listItem.appendChild(anchor);

                listItem.addEventListener('click', function () {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: {
                            y: heading.offsetTop,
                            offsetY: parseFloat(getComputedStyle(document.documentElement).fontSize) * 1
                        }
                    });
                });

                toc.appendChild(listItem);
            });
        }
    }
});