function setupCounter({ inputSelector, incrementSelector, decrementSelector, pasteSelector, minValue, maxValue, defaultValue, onChange }) {
    const inputElement = document.querySelector(inputSelector);
    const incrementButton = document.querySelector(incrementSelector);
    const decrementButton = document.querySelector(decrementSelector);
    const pasteElements = document.querySelectorAll(pasteSelector);

    inputElement.value = defaultValue;
    pasteElements.forEach(el => (el.textContent = inputElement.value));

    function updateButtonsState() {
        const currentValue = parseInt(inputElement.value, 10);
        incrementButton.classList.toggle('is-unactive', currentValue >= maxValue);
        decrementButton.classList.toggle('is-unactive', currentValue <= minValue);
    }

    function updateValue(value) {
        inputElement.value = value;
        pasteElements.forEach(el => (el.textContent = value));
        updateButtonsState();
        if (onChange) onChange(value);
    }

    inputElement.addEventListener('input', () => {
        let value = parseInt(inputElement.value, 10);
        if (isNaN(value) || value < minValue) value = minValue;
        if (value > maxValue) value = maxValue;
        updateValue(value);
    });

    incrementButton.addEventListener('click', () => {
        const currentValue = parseInt(inputElement.value, 10);
        if (currentValue < maxValue) {
            updateValue(currentValue + 1);
        }
    });

    decrementButton.addEventListener('click', () => {
        const currentValue = parseInt(inputElement.value, 10);
        if (currentValue > minValue) {
            updateValue(currentValue - 1);
        }
    });

    inputElement.addEventListener('blur', () => {
        if (!inputElement.value) {
            updateValue(minValue);
        }
    });

    updateButtonsState();

    inputElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
}

function setupPeriodSelector() {
    const periodLabels = document.querySelectorAll('[calc-period]');
    periodLabels.forEach(label => {
        label.addEventListener('click', () => {
            periodLabels.forEach(label => label.classList.remove('is-active'));
            label.classList.add('is-active');
            updatePrices();
        });
    });
    const defaultLabel = document.querySelector('[calc-period="1y"]');
    if (defaultLabel) {
        defaultLabel.classList.add('is-active');
    }
}

function formatPrice(price) {
    const priceString = price.toLocaleString('ru-RU', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    return priceString.endsWith(',0') ? priceString.slice(0, -2) : priceString;
}

function checkAndSetDefaultsForBothInputs() {
    const wanumbersInput = document.querySelector('[calc-wanumbers="count"]');
    const usersInput = document.querySelector('[calc-users="count"]');
    let defaultsUpdated = false;

    if (!wanumbersInput.value || isNaN(parseInt(wanumbersInput.value, 10))) {
        wanumbersInput.value = 1;
        defaultsUpdated = true;
    }
    if (!usersInput.value || isNaN(parseInt(usersInput.value, 10))) {
        usersInput.value = 3;
        defaultsUpdated = true;
    }

    if (defaultsUpdated) {
        updatePricesWithoutDefaultsCheck();
    }
}

function updatePricesWithoutDefaultsCheck() {
    const usersCount = parseInt(document.querySelector('[calc-users="count"]').value, 10);
    const wanumbersCount = parseInt(document.querySelector('[calc-wanumbers="count"]').value, 10);
    const periodValue = document.querySelector('.is-active[calc-period]').getAttribute('calc-period');
    const discount = periodValue === '1m' ? 1 : periodValue === '6m' ? 0.85 : 0.8;
    const periodMultiplier = periodValue === '1m' ? 1 : periodValue === '6m' ? 6 : 12;

    const basicPrice = 99 + Math.max(0, usersCount - 3) * 40 + Math.max(0, wanumbersCount - 1) * 25;
    const professionalPrice = 149 + Math.max(0, usersCount - 3) * 50 + Math.max(0, wanumbersCount - 1) * 25;

    const totalPriceBasic = basicPrice * discount * periodMultiplier;
    const totalPriceProfessional = professionalPrice * discount * periodMultiplier;

    const savingsBasic = basicPrice * periodMultiplier - totalPriceBasic;
    const savingsProfessional = professionalPrice * periodMultiplier - totalPriceProfessional;

    document.querySelector('[calc-basic-price="total"]').textContent = formatPrice(totalPriceBasic);
    document.querySelector('[calc-basic-price="discount"]').textContent = formatPrice(savingsBasic);

    document.querySelectorAll('[calc-basic-price="1m"]').forEach(el => {
        el.textContent = formatPrice(99 * discount);
    });
    document.querySelectorAll('[calc-basic-price="text-period"]').forEach(el => {
        el.textContent = periodValue === '1m' ? 'mensual' : periodValue === '6m' ? 'semestral' : 'anual';
    });

    document.querySelector('[calc-professional-price="total"]').textContent = formatPrice(totalPriceProfessional);
    document.querySelector('[calc-professional-price="discount"]').textContent = formatPrice(savingsProfessional);

    document.querySelectorAll('[calc-professional-price="1m"]').forEach(el => {
        el.textContent = formatPrice(149 * discount);
    });

    const discountPriceWrappers = document.querySelectorAll('.pt-tablet_discond-price-wrapper');
    discountPriceWrappers.forEach(wrapper => {
        wrapper.style.display = (periodValue === '1m') ? 'none' : '';
    });
}

function updatePrices() {
    checkAndSetDefaultsForBothInputs();
    updatePricesWithoutDefaultsCheck();
}

document.querySelectorAll('[calc-users="increment"], [calc-users="decrement"], [calc-wanumbers="increment"], [calc-wanumbers="decrement"], [calc-period]').forEach(button => {
    button.addEventListener('click', () => {
        checkAndSetDefaultsForBothInputs();
    });
});

setupCounter({
    inputSelector: '[calc-users="count"]',
    incrementSelector: '[calc-users="increment"]',
    decrementSelector: '[calc-users="decrement"]',
    pasteSelector: '[calc-users="paste-count"]',
    minValue: 3,
    maxValue: 20,
    defaultValue: 3,
    onChange: updatePrices,
});

setupCounter({
    inputSelector: '[calc-wanumbers="count"]',
    incrementSelector: '[calc-wanumbers="increment"]',
    decrementSelector: '[calc-wanumbers="decrement"]',
    pasteSelector: '[calc-wanumbers="paste-count"]',
    minValue: 1,
    maxValue: 10,
    defaultValue: 1,
    onChange: updatePrices,
});

setupPeriodSelector();
updatePrices();