const inputNumber = document.querySelector('.qr-generator_text-input');
const inputMessage = document.querySelector('.qr-generator_text-area');
const phoneNumberImg = document.querySelector('[qr-generator="phone-number-img"]');
const messageTextImg = document.querySelector('[qr-generator="message-text-img"]');
const generatorBtn = document.querySelector('[qr-generator="generator-btn"]');
const copyBtns = document.querySelectorAll('[qr-generator="copy-btn"]');
const copyBtnDone = document.querySelector('.qr-generator_btn-image-done')
const openBtn = document.querySelector('[qr-generator="open-btn"]');
const qrCodeContainer = document.querySelector('[qr-generator="qr-code"]');
const qrCodeLinkWrapp = document.querySelector('[qr-generator="qr-code-wrapp"]');

qrCodeLinkWrapp.setAttribute('download', 'qr-whatsapp.png');

const qrLogo =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU3IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NyAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80OTcyXzQ4MTEzKSI+CjxwYXRoIGQ9Ik0wLjk1NTA3OCAxMjcuOTk5QzAuOTU1MDc4IDU3LjMwNjcgNTguMjY0MiAwIDEyOC45NTYgMEMxOTkuNjQ4IDAgMjU2Ljk1NSA1Ny4zMDY3IDI1Ni45NTUgMTI3Ljk5OUMyNTYuOTU1IDE5OC42OTMgMTk5LjY0OCAyNTYgMTI4Ljk1NiAyNTZDNTguMjY0MiAyNTYgMC45NTUwNzggMTk4LjY5MyAwLjk1NTA3OCAxMjcuOTk5WiIgZmlsbD0iIzMwQkYzOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzNC45MSA1My45ODkzQzk2LjM0ODYgNTMuOTg5MyA2NS4wODQyIDg1LjI1MTMgNjUuMDg0MiAxMjMuODJDNjUuMDg0MiAxMzcuMDE0IDY4Ljc0NjggMTQ5LjM1MSA3NS4xMDU3IDE1OS44NzlMNjIuNSAxOTcuMzQxTDEwMS4xNiAxODQuOTY3QzExMS4xNjcgMTkwLjQ5NyAxMjIuNjcxIDE5My42NTEgMTM0LjkxIDE5My42NTFDMTczLjQ4NCAxOTMuNjUxIDIwNC43NDggMTYyLjM4NCAyMDQuNzQ4IDEyMy44MkMyMDQuNzQ4IDg1LjI1MTMgMTczLjQ4NCA1My45ODkzIDEzNC45MSA1My45ODkzWk0xMzQuOTEgMTgxLjk1M0MxMjMuMTEgMTgxLjk1MyAxMTIuMTEgMTc4LjQxMiAxMDIuOTM0IDE3Mi4zMzhMODAuNTkxNSAxNzkuNDlMODcuODUzNyAxNTcuOTAyQzgwLjg5NSAxNDguMzE5IDc2Ljc4NjQgMTM2LjU0NSA3Ni43ODY0IDEyMy44MkM3Ni43ODY0IDkxLjc1OTUgMTAyLjg2MSA2NS42ODQ1IDEzNC45MSA2NS42ODQ1QzE2Ni45NjggNjUuNjg0NSAxOTMuMDQ2IDkxLjc1OTUgMTkzLjA0NiAxMjMuODJDMTkzLjA0NiAxNTUuODcxIDE2Ni45NjggMTgxLjk1MyAxMzQuOTEgMTgxLjk1M1pNMTY3LjY1NSAxMzkuNjg3QzE2NS45MDYgMTM4LjcyNyAxNTcuMzA2IDEzNC4wODcgMTU1LjY5NiAxMzMuNDMzQzE1NC4wODUgMTMyLjc3NSAxNTIuOTA0IDEzMi40MzYgMTUxLjY0NSAxMzQuMTc1QzE1MC4zOTcgMTM1LjkxIDE0Ni44MjMgMTM5Ljc5OSAxNDUuNzQ2IDE0MC45NDdDMTQ0LjY1OSAxNDIuMTAzIDE0My42MTUgMTQyLjIxIDE0MS44NjIgMTQxLjI0OEMxNDAuMTE4IDE0MC4yOTEgMTM0LjQ0MSAxMzguMTkzIDEyNy44NiAxMzEuODY0QzEyMi43MzkgMTI2Ljk0MyAxMTkuMzgyIDEyMC45NzQgMTE4LjQwOCAxMTkuMTUxQzExNy40MyAxMTcuMzI4IDExOC40MDEgMTE2LjM5OSAxMTkuMzI2IDExNS41NDVDMTIwLjE1OSAxMTQuNzcyIDEyMS4xODkgMTEzLjUyNSAxMjIuMTIgMTEyLjUxOUMxMjMuMDQ1IDExMS41MTUgMTIzLjM3MSAxMTAuNzggMTI0LjAxMSAxMDkuNjE1QzEyNC42NDggMTA4LjQ1IDEyNC4zOTEgMTA3LjM5OCAxMjMuOTc2IDEwNi40ODlDMTIzLjU2NSAxMDUuNTgxIDEyMC4zMyA5Ni42NzU4IDExOC45OCA5My4wNTA1QzExNy42MjcgODkuNDI5OCAxMTYuMTIxIDg5Ljk2NjcgMTE1LjA4MiA4OS45MjQ3QzExNC4wNDEgODkuODg5OCAxMTIuODYgODkuNjk1OSAxMTEuNjcyIDg5LjY0OTNDMTEwLjQ3OSA4OS42MDcyIDEwOC41MzIgODkuOTgwNyAxMDYuODM3IDkxLjcwMTJDMTA1LjEzMyA5My40MjE2IDEwMC4zNjQgOTcuNTYyOCAxMDAuMDM5IDEwNi4zMzVDOTkuNzA3OCAxMTUuMTAzIDEwNS43NzcgMTIzLjgyIDEwNi42MjUgMTI1LjAzOEMxMDcuNDcyIDEyNi4yNjQgMTE4LjIxMiAxNDUuMjc1IDEzNi4wNTkgMTUzLjA5MUMxNTMuOTE3IDE2MC45MTEgMTU0LjAxMyAxNTguNTI4IDE1Ny4yODUgMTU4LjM1MkMxNjAuNTY1IDE1OC4xNzcgMTY3Ljk5MyAxNTQuNDMxIDE2OS42MzcgMTUwLjMyN0MxNzEuMjggMTQ2LjIyMyAxNzEuNDExIDE0Mi42NTQgMTcwLjk5NSAxNDEuODk1QzE3MC41NzUgMTQxLjEzNCAxNjkuNDAzIDE0MC42NDQgMTY3LjY1NSAxMzkuNjg3WiIgZmlsbD0iI0YxRjJGMiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzQ5NzJfNDgxMTMiPgo8cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTU3MDMxKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

const initialPhoneNumberContent = phoneNumberImg.textContent;
const initialMessageTextContent = messageTextImg.textContent;

const countryCodes = [
    '1', '20', '211', '212', '213', '216', '218', '220', '221', '222', '223', '224', '225', '226',
    '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239',
    '240', '241', '242', '243', '244', '245', '246', '247', '248', '249', '250', '251', '252',
    '253', '254', '255', '256', '257', '258', '260', '261', '262', '263', '264', '265', '266',
    '267', '268', '269', '27', '290', '291', '297', '298', '299', '30', '31', '32', '33', '34',
    '350', '351', '352', '353', '354', '355', '356', '357', '358', '359', '36', '370', '371', '372',
    '373', '374', '375', '376', '377', '378', '379', '380', '381', '382', '383', '385', '386',
    '387', '389', '39', '40', '41', '420', '421', '423', '43', '44', '45', '46', '47', '48', '49',
    '500', '501', '502', '503', '504', '505', '506', '507', '508', '509', '51', '52', '53', '54',
    '55', '56', '57', '58', '590', '591', '592', '593', '594', '595', '596', '597', '598', '599',
    '60', '61', '62', '63', '64', '65', '66', '670', '672', '673', '674', '675', '676', '677',
    '678', '679', '680', '681', '682', '683', '685', '686', '687', '688', '689', '690', '691',
    '692', '7', '81', '82', '84', '850', '852', '853', '855', '856', '86', '880', '886', '90', '91',
    '92', '93', '94', '95', '960', '961', '962', '963', '964', '965', '966', '967', '968', '970',
    '971', '972', '973', '974', '975', '976', '977', '98', '992', '993', '994', '995', '996', '998'
];

let generatedLink = '';
let qrCode;
let lastClickTime = 0;

inputNumber.addEventListener('input', function () {
    let value = inputNumber.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = '+' + value;
    }

    let formattedValue = '';
    let codeFound = false;

    for (let code of countryCodes) {
        if (value.startsWith('+' + code)) {
            formattedValue = '+' + code + ' ';
            value = value.slice(code.length + 1);
            codeFound = true;
            break;
        }
    }

    if (!codeFound) {
        inputNumber.value = value;
        phoneNumberImg.value = value;
        phoneNumberImg.textContent = value;
        if (value === '') {
            phoneNumberImg.value = initialPhoneNumberContent;
            phoneNumberImg.textContent = initialPhoneNumberContent;
        }
        return;
    }

    if (value.length > 3) {
        formattedValue += value.slice(0, 3) + ' ';
        value = value.slice(3);
    }
    if (value.length > 3) {
        formattedValue += value.slice(0, 3) + ' ';
        value = value.slice(3);
    }
    if (value.length > 4) {
        formattedValue += value.slice(0, 6);
    } else {
        formattedValue += value;
    }

    // if (formattedValue.length > 17) {
    //     formattedValue = formattedValue.slice(0, 17);
    // }

    inputNumber.value = formattedValue.trim();
    phoneNumberImg.value = formattedValue.trim();
    phoneNumberImg.textContent = formattedValue.trim();

    if (inputNumber.value === '+' || inputNumber.value === '') {
        phoneNumberImg.value = initialPhoneNumberContent;
        phoneNumberImg.textContent = initialPhoneNumberContent;
    }
});

inputMessage.addEventListener('input', function () {
    messageTextImg.value = inputMessage.value;
    messageTextImg.textContent = inputMessage.value;

    if (!inputMessage.value) {
        messageTextImg.value = initialMessageTextContent;
        messageTextImg.textContent = initialMessageTextContent;
    }
});

generatorBtn.addEventListener('click', function () {
    const now = Date.now();
    if (now - lastClickTime < 1000) { // Проверяем, прошло ли уже 1 секунда с последнего нажатия
        return; // Если нет, отменяем действие
    }

    lastClickTime = now; // Обновляем время последнего нажатия

    const phoneNumber = inputNumber.value.trim(); // Удаляем пробелы с обоих концов значения
    const messageText = inputMessage.value.trim(); // Удаляем пробелы с обоих концов значения

    // Проверяем, заполнены ли оба поля
    if (phoneNumber && messageText) { // Если оба поля заполнены
        const formattedPhoneNumber = phoneNumber.replace(/\D/g,
            ''); // Удаляем все нецифровые символы из номера телефона
        const encodedMessageText = encodeURIComponent(
            messageText); // Кодируем текст сообщения для использования в URL
        generatedLink =
            `https://api.whatsapp.com/send/send?phone=${formattedPhoneNumber}&text=${encodedMessageText}`;
        console.log('Generated link:', generatedLink); // Отладочное сообщение

        generateQRCode(generatedLink);
    } else {
        // Если одно или оба поля не заполнены, анимируем их
        if (!phoneNumber) {
            shakeInput(inputNumber);
            setTimeout(() => inputNumber.focus(),
                500); // Устанавливаем фокус на первый input после анимации
        }
        if (!messageText) shakeInput(inputMessage);
    }
});

openBtn.addEventListener('click', function () {
    if (generatedLink) {
        window.open(generatedLink, '_blank');
        console.log('Link opened in new tab');
    } else {
        shakeInput(generatorBtn); // Анимируем generatorBtn, если ссылка не сгенерирована
    }
});

// Отключаем отправку формы при нажатии Enter на всей странице
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

function generateQRCode(data) {
    console.log('Generating QR code for:', data); // Отладочное сообщение

    qrCode = new QRCodeStyling({
        width: 1080,
        height: 1080,
        data: data,
        margin: 0,
        qrOptions: {
            typeNumber: "0",
            mode: "Byte",
            errorCorrectionLevel: "M",
        },
        imageOptions: {
            hideBackgroundDots: true,
            imageSize: 0.5,
            margin: 0,
        },
        dotsOptions: {
            type: "dots",
            color: "#000000",
        },
        backgroundOptions: {
            color: "#ffffff",
        },
        cornersSquareOptions: {
            type: "dot",
            color: "#000000",
        },
        cornersDotOptions: {
            type: "dot",
            color: "#000000",
        },
        backgroundOptionsHelper: {
            colorType: {
                single: true,
                gradient: false,
            },
            gradient: {
                linear: true,
                radial: false,
                color1: "#ffffff",
                color2: "#ffffff",
                rotation: "0",
            },
        },
        image: qrLogo,
        dotsOptionsHelper: {
            colorType: {
                single: true,
                gradient: false,
            },
            gradient: {
                linear: true,
                radial: false,
                color1: "#6a1a4c",
                color2: "#6a1a4c",
                rotation: "0",
            },
        },
        cornersSquareOptionsHelper: {
            colorType: {
                single: true,
                gradient: false,
            },
            gradient: {
                linear: true,
                radial: false,
                color1: "#000000",
                color2: "#000000",
                rotation: "0",
            },
        },
        cornersDotOptionsHelper: {
            colorType: {
                single: true,
                gradient: false,
            },
            gradient: {
                linear: true,
                radial: false,
                color1: "#000000",
                color2: "#000000",
                rotation: "0",
            },
        },
        type: "canvas",
    });

    console.log('QR code instance created:', qrCode);

    qrCodeContainer.innerHTML = "";

    qrCode.getRawData("png").then((blob) => {
        const url = URL.createObjectURL(blob);
        const imgElement = document.querySelector(
            '.qr-generator_qr-image'); // Используем правильный селектор для выбора элемента
        imgElement.src = url; // Прямо заменяем src у существующего изображения
        console.log(
            'QR code generated and updated'); // Отладочное сообщение после обновления изображения

        // После успешной генерации QR-кода запускаем анимацию для элемента с классом .qr-generator_link
        animateLink();
        animateGeneratorButtonColorChange();
    }).catch((error) => {
        console.error('Error generating QR code:', error);
    });
}

function animateLink() {
    const stageElement = document.querySelector(
        '.qr-generator_link');
    if (stageElement) {
        gsap.fromTo(stageElement, {
            color: "#6528d7",
            autoAlpha: 0,
            y: "0.25rem"
        }, {
            color: "#4cd560",
            duration: 1,
            autoAlpha: 1,
            y: "",
            ease: 'power3.out'
        });
    } else {
        console.warn('.qr-generator_link element not found');
    }
}

function shakeInput(inputElement) {
    gsap.fromTo(inputElement, {
        x: "0rem",
        duration: 0.1,
        ease: "power2.inOut"
    }, {
        x: "0.5rem",
        yoyo: true,
        repeat: 3,

        duration: 0.1,
        ease: "power2.inOut"
    });
}

function animateCopyBtnDone() {
    gsap.killTweensOf(copyBtnDone);

    gsap.fromTo(copyBtnDone, {
        opacity: 0,
        scale: 1.25
    }, {
        duration: 0.25, // Продолжительность анимации
        opacity: 1, // Конечное состояние: полностью непрозрачный
        scale: 1, // Увеличиваем масштаб до 1
        ease: "power1.out", // Тип анимации
        onComplete: function () {
            gsap.to(copyBtnDone, {
                delay: 1,
                opacity: 0,
                scale: 1
            });
        }
    });
}

function animateGeneratorButtonColorChange() {
    gsap.killTweensOf(generatorBtn);

    gsap.to(generatorBtn, {
        backgroundColor: '#30BF39',
        duration: 0,
        ease: 'none',
        onComplete: function () {
            gsap.to(generatorBtn, {
                delay: 2,
                backgroundColor: '#6528D7',
                duration: 0.5
            });
        }
    });
}

// Перебираем все кнопки копирования ссылки
copyBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        if (generatedLink) {
            navigator.clipboard.writeText(generatedLink).then(function () {
                console.log('Link copied to clipboard');
                animateCopyBtnDone();
            }).catch(function (error) {
                console.error('Error copying link to clipboard:', error);
            });
        } else {
            shakeInput(generatorBtn);
        }
    });
});