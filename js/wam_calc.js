
// WAM Calculator
document.addEventListener('DOMContentLoaded', function () {
    let calcQuantity = 10000;
    let calcPrice = 60;

    function updateActiveElement(element, containerId) {
        document.querySelectorAll(`#${containerId} .wam-calc_input-is-active`).forEach(el => el
            .classList.remove('wam-calc_input-is-active'));
        if (element.type === 'radio') {
            const parentLabel = element.closest('.wam-calc_radio-btn');
            if (parentLabel) {
                parentLabel.classList.add('wam-calc_input-is-active');
            }
        } else {
            element.classList.add('wam-calc_input-is-active');
        }
        if (containerId === 'calc-quantity') {
            calcQuantity = element.value;
        } else if (containerId === 'calc-price') {
            calcPrice = element.value;
        }
        calculateTotalCost();
    }

    function calculateTotalCost() {
        let calcStage1 = Math.floor(calcQuantity * 0.81);
        let calcStage2 = Math.floor(calcStage1 * 0.36);
        let calcStage3 = Math.floor(calcStage2 * 0.08);
        let calcTotalCost = Math.floor(calcStage3 * calcPrice);

        document.getElementById('calc-stage-1').textContent = formatNumber(calcStage1);
        document.getElementById('calc-stage-2').textContent = formatNumber(calcStage2);
        document.getElementById('calc-stage-3').textContent = formatNumber(calcStage3);
        document.getElementById('calc-total-cost').textContent = '$' + formatNumber(calcTotalCost);
    }

    function isNumber(char) {
        return !isNaN(char) && char !== '';
    }

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    }

    document.querySelectorAll(
        '#calc-quantity input[type="radio"], #calc-price input[type="radio"]').forEach(el => {
            el.addEventListener('click', function () {
                const inputId = this.closest('form').id === 'calc-quantity' ? 'calc-quantity-2' :
                    'calc-price-2';
                document.getElementById(inputId).value = '';
                updateActiveElement(this, this.closest('form').id);
            });
        });

    document.getElementById('calc-quantity-2').addEventListener('input', function () {
        this.value = this.value.split('').filter(isNumber).join('').slice(0, 6);
        updateActiveElement(this, this.closest('form').id);
    });

    document.getElementById('calc-price-2').addEventListener('input', function () {
        this.value = this.value.split('').filter(isNumber).join('').slice(0, 6);
        updateActiveElement(this, this.closest('form').id);
    });

    document.getElementById('10000').closest('.wam-calc_radio-btn').classList.add(
        'wam-calc_input-is-active');
    document.getElementById('60').closest('.wam-calc_radio-btn').classList.add(
        'wam-calc_input-is-active');

    calculateTotalCost();
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calc-quantity').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });

    document.getElementById('calc-price').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    });
});
