const inputNumber = document.querySelector('.qr-generator_text-input');
const inputMessage = document.querySelector('.qr-generator_text-area');
const phoneNumberImg = document.querySelector('[qr-generator="phone-number-img"]');
const messageTextImg = document.querySelector('[qr-generator="message-text-img"]');
const generatorBtn = document.querySelector('[qr-generator="generator-btn"]');
const copyBtns = document.querySelectorAll('[qr-generator="copy-btn"]');
const copyBtnDone = document.querySelector('.qr-generator_btn-image-done')
const openBtn = document.querySelector('[qr-generator="open-btn"]');
const qrCodeContainer = document.querySelector('[qr-generator="qr-code"]');

const qrLogo =
    "data:image/png;base64,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";

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
        formattedValue += value.slice(0, 4);
    } else {
        formattedValue += value;
    }

    if (formattedValue.length > 17) {
        formattedValue = formattedValue.slice(0, 17);
    }

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
    const phoneNumber = inputNumber.value.trim(); // Удаляем пробелы с обоих концов значения
    const messageText = inputMessage.value.trim(); // Удаляем пробелы с обоих концов значения

    // Проверяем, заполнены ли оба поля
    if (phoneNumber && messageText) { // Если оба поля заполнены
        const formattedPhoneNumber = phoneNumber.replace(/\D/g,
            ''); // Удаляем все нецифровые символы из номера телефона
        const encodedMessageText = encodeURIComponent(
            messageText); // Кодируем текст сообщения для использования в URL
        generatedLink =
            `https://wa.me/send?phone=${formattedPhoneNumber}&text=${encodedMessageText}`;
        console.log('Generated link:', generatedLink); // Отладочное сообщение

        generateQRCode(generatedLink);
    } else {
        // Если одно или оба поля не заполнены, анимируем их
        if (!phoneNumber) shakeInput(inputNumber);
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
        width: 420,
        height: 420,
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
        duration: 0.1,
        yoyo: true,
        repeat: 3,
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