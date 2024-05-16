// Suggested code may be subject to a license. Learn more: ~LicenseLog:1033560145.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2043502072.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1044543220.

const STAGE_1_FACTOR = 0.81;
const STAGE_2_FACTOR = 0.36;
const STAGE_3_FACTOR = 0.08;

document.addEventListener('DOMContentLoaded', function () {
    let productQuantity = 10000;
    let productPrice = 60;

    function updateActiveElement(element, containerId) {
        document.querySelectorAll(`
#${containerId} .wam-calc_input-is-active`).forEach(el => el.classList.remove('wam-calc_input-is-active'));
        if (element.type === 'radio') {
            const parentLabel = element.closest('.wam-calc_radio-btn');
            if (parentLabel) {
                parentLabel.classList.add('wam-calc_input-is-active');
            }
        } else {
            element.classList.add('wam-calc_input-is-active');
        }
        if (containerId === 'calc-quantity') {
            productQuantity = element.value;
        } else if (containerId === 'calc-price') {
            productPrice = element.value;
        }
        calculateTotalCost();
    }

    function calculateTotalCost() {
        let stage1 = Math.floor(productQuantity * STAGE_1_FACTOR);
        let stage2 = Math.floor(stage1 * STAGE_2_FACTOR);
        let stage3 = Math.floor(stage2 * STAGE_3_FACTOR);
        let totalCost = Math.floor(stage3 * productPrice);

        document.getElementById('calc-stage-1').textContent = formatNumber(stage1);
        document.getElementById('calc-stage-2').textContent = formatNumber(stage2);
        document.getElementById('calc-stage-3').textContent = formatNumber(stage3);
        document.getElementById('calc-total-cost').textContent = '$' + formatNumber(totalCost);
    }

    function isNumber(char) {
        return !isNaN(char) && char !== '';
    }

    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    }
});