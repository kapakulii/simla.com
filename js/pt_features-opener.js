// Показываем описание тарифов
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.pt-tablet_arrow-wrapper').forEach(item => {
        item.classList.remove('is-open');
    });
    document.querySelectorAll('.pt-tablet_list-features-wrapper').forEach(item => {
        item.classList.remove('is-open');
    });
});

document.querySelectorAll('.pt-tablet_arrow-wrapper').forEach(item => {
    item.addEventListener('click', function () {
        const currentArrowWrapper = this;
        const currentHeadWrapper = currentArrowWrapper.closest('.pt-tablet_head-wrapper');
        const listFeaturesWrapper = currentHeadWrapper.querySelector('.pt-tablet_list-features-wrapper');

        currentArrowWrapper.classList.toggle('is-open');
        if (listFeaturesWrapper) {
            listFeaturesWrapper.classList.toggle('is-open');
        }
    });
});