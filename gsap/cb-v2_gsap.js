function animateCbTextImg(attrValue) {
    const selector = `[cb-text-img="${attrValue}"]`;

    // Скрываем элементы заранее
    gsap.set(selector, {
        autoAlpha: 0,
        y: '-1rem'
    });

    // Запускаем бесконечную анимацию
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    tl.to({}, { duration: 0.5 }) // Пауза в начале
        .to(selector, {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            stagger: { amount: 0.5 }, // вся группа анимируется за 0.6 сек
            ease: 'power2.out'
        })
        .to({}, { duration: 3 }) // Пауза после появления
        .to(selector, {
            autoAlpha: 0,
            y: '0.5rem',
            duration: 0.35,
            ease: 'power2.inOut'
        });
}

// Пример использования
animateCbTextImg("1");
animateCbTextImg("2");


const smiles = document.querySelectorAll('[cb-smile]');
const rotationMap = new Map();
smiles.forEach(el => rotationMap.set(el, 0));

let lastIndex = -1; // Храним предыдущий индекс

function animateRandomSmile() {
    if (smiles.length === 0) return;

    let index;

    // Генерируем новый индекс, не равный предыдущему
    do {
        index = Math.floor(Math.random() * smiles.length);
    } while (index === lastIndex && smiles.length > 1);

    lastIndex = index;

    const el = smiles[index];

    let currentRotation = rotationMap.get(el) || 0;
    const delta = Math.random() > 0.5 ? 225 : -90;
    const newRotation = currentRotation + delta;

    rotationMap.set(el, newRotation);

    gsap.to(el, {
        rotate: newRotation,
        duration: 1.5,
        ease: 'power3.out'
    });
}

setInterval(animateRandomSmile, 1000);