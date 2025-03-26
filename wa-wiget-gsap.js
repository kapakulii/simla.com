document.addEventListener("DOMContentLoaded", () => {
    const chatWrapperDesktop = document.querySelector(".wa-main_chat-desktop-wrapper");
    const chatWrapper = document.querySelector(".wa-main_chat-img-wrapper");
    const chatCloser = document.querySelector(".wa-main_chat-img-closer");
    const mainBlock = document.querySelector(".wa-main");
    const popup = document.querySelector(".wa-popup");
    const popupCloser = document.querySelector(".wa-popup_img-closer");
    const popupOpener = document.querySelector(".wa-main_wa-desktop-btn");

    chatWrapper.style.display = "block";

    // Анимация появления mainBlock через 30 секунд
    setTimeout(() => {
        mainBlock.style.display = "flex";

        gsap.fromTo(mainBlock,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.5, delay: 30, ease: "power2.out" }
        );

        gsap.fromTo(chatWrapper,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.5, delay: 35, ease: "power2.out" }
        );
    }, 100);

    const hideChat = () => {
        gsap.to(chatWrapper, {
            autoAlpha: 0,
            y: 10,
            duration: 0.5,
            onComplete: () => {
                chatWrapper.style.display = "none";
            }
        });
    };
    setTimeout(hideChat, 80000); // Исчезновение chatWrapper через 80 секунд или при клике

    if (chatCloser) {
        chatCloser.addEventListener("click", (event) => {
            event.stopPropagation();
            hideChat();
        });
    }

    if (mainBlock && popup) {
        const showPopup = () => {
            popup.style.display = "flex";
            mainBlock.style.display = "none";
        };

        [popupOpener, chatWrapperDesktop].forEach(el => {
            el.addEventListener("click", (event) => {
                if (!event.target.closest(".wa-main_chat-img-closer")) {
                    showPopup();
                }
            });
        });
    }

    if (popupCloser) {
        popupCloser.addEventListener("click", () => {
            popup.style.display = "none";
            mainBlock.style.display = "flex";
        });
    }
});