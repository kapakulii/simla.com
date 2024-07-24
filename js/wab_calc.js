// Объявление переменных для расчета
let calcQuantity = 10000;
let calcPrice = 60;
let calcCountryMultiplier = 0.04796;

// Функция для форматирования чисел
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Функция расчета общей стоимости
function calculateTotalCost() {
    let calcStage1 = Math.floor(calcQuantity * 0.81);
    let calcStage2 = Math.floor(calcStage1 * 0.36);
    let calcStage3 = Math.floor(calcStage2 * 0.08);
    let calcTotalCost = Math.floor(calcStage3 * calcPrice);

    // Анимация для calc-total-cost
    gsap.fromTo(document.getElementById('calc-total-cost')
        .parentElement, {
        backgroundImage: "linear-gradient(#8453df, #6528d7 37%)",
        autoAlpha: 0,
        y: "0.5rem"
    },
        {
            duration: 1,
            backgroundImage: "linear-gradient(#60fc7c, #26d044 37%)",
            autoAlpha: 1,
            y: "",
            ease: 'power3.out'
        });

    document.getElementById('calc-stage-1').textContent = formatNumber(calcStage1);
    document.getElementById('calc-stage-2').textContent = formatNumber(calcStage2);
    document.getElementById('calc-stage-3').textContent = formatNumber(calcStage3);
    document.getElementById('calc-total-cost').textContent = '$' + formatNumber(calcTotalCost);
}

// Функция для расчета стоимости рассылки
function calculateMailingCost() {
    let mailingCost = Math.round(calcQuantity * calcCountryMultiplier);
    let formattedCost = formatNumber(mailingCost);

    // Анимация для calc-cost-mailing
    gsap.fromTo(document.getElementById('calc-cost-mailing')
        .parentElement, {
        backgroundImage: "linear-gradient(#8453df, #6528d7 37%)",
        autoAlpha: 0,
        y: "0.25rem"
    },
        {
            duration: 1,
            backgroundImage: "linear-gradient(#60fc7c, #26d044 37%)",
            autoAlpha: 1,
            y: "",
            ease: 'power3.out'
        });

    document.getElementById('calc-cost-mailing').textContent = '$' + formattedCost;
}

// Функция для анимации calc-stage-1, calc-stage-2 и calc-stage-3
function animateCalcStages() {
    const stages = ['calc-stage-1', 'calc-stage-2', 'calc-stage-3'];

    stages.forEach(stageId => {
        const stageElement = document.getElementById(stageId);
        gsap.fromTo(stageElement, {
            color: "#6528d7",
            autoAlpha: 0,
            y: "0.25rem"
        },
            {
                color: "#1e2248",
                duration: 1,
                autoAlpha: 1,
                y: "",
                ease: 'power3.out'
            });
    });
}

// Функция обновления активных элементов и расчета
function updateActiveElement(element, containerId) {
    document.querySelectorAll(
        `#${containerId} .wam-calc_input-is-active, #${containerId} .wab-calc_input-is-active`)
        .forEach(el => {
            el.classList.remove('wam-calc_input-is-active', 'wab-calc_input-is-active');
        });

    if (element.type === 'radio') {
        const parentLabel = element.closest('.wam-calc_radio-btn, .wab-calc_radio-btn');
        if (parentLabel) {
            parentLabel.classList.add(parentLabel.classList.contains('wam-calc_radio-btn') ?
                'wam-calc_input-is-active' : 'wab-calc_input-is-active');
        }

        if (containerId === 'calc-quantity') {
            document.getElementById('calc-quantity-2').value = '';
        } else if (containerId === 'calc-price') {
            document.getElementById('calc-price-2').value = '';
        }
    } else {
        element.classList.add('wam-calc_input-is-active');
    }

    if (containerId === 'calc-quantity' || containerId === 'calc-price') {
        if (containerId === 'calc-quantity') {
            calcQuantity = element.value;
            calculateMailingCost(); // Вызываем calculateMailingCost при изменении значения calc-quantity
            animateCalcStages(); // Запускаем анимацию для calc-stage-1, calc-stage-2 и calc-stage-3
        } else if (containerId === 'calc-price') {
            calcPrice = element.value;
        }
        calculateTotalCost();
    } else if (containerId === 'calc-country') {
        calcCountryMultiplier = parseFloat(element.value);
        calculateMailingCost();
    }
}

// Добавление обработчиков событий
document.querySelectorAll(
    '#calc-quantity input[type="radio"], #calc-price input[type="radio"], #calc-country input[type="radio"]'
)
    .forEach(el => {
        el.addEventListener('change', function () {
            const inputId = this.closest('form').id;
            updateActiveElement(this, inputId);
        });
    });

document.getElementById('calc-quantity-2').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 6);
    updateActiveElement(this, 'calc-quantity');
});

document.getElementById('calc-price-2').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '').slice(0, 6);
    updateActiveElement(this, 'calc-price');
});

document.getElementById('calc-quantity-2').addEventListener('click', function () {
    document.querySelectorAll('#calc-quantity input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    updateActiveElement(this, 'calc-quantity');
});

document.getElementById('calc-price-2').addEventListener('click', function () {
    document.querySelectorAll('#calc-price input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    updateActiveElement(this, 'calc-price');
});
