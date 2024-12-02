document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('.button-toggle');

    // Обработка кнопок переключения (включение/выключение)
    toggles.forEach(toggle => {
        const circle = toggle.querySelector('.button-circle');
        const buttonType = toggle.dataset.type || 'default';
        circle.src = '/images/toggler-off.png';

        if (buttonType === 'type-2') {
            circle.style.left = '6px';
        } else if (buttonType === 'type-3') {
            circle.style.left = '2px';
        } else {
            circle.style.left = '-8px';
        }

        toggle.addEventListener('click', function () {
            const isActive = this.classList.toggle('active');

            if (isActive) {
                circle.style.transition = 'opacity 0.15s ease, left 0.3s ease';
                circle.style.opacity = '1';

                setTimeout(() => {
                    if (buttonType === 'type-2') {
                        circle.src = '/images/toggler-on.png';
                        circle.style.left = 'calc(100% - 73px)';
                    } else if (buttonType === 'type-3') {
                        circle.src = '/images/toggler-on.png';
                        circle.style.left = 'calc(100% - 52px)';
                    } else {
                        circle.src = '/images/toggler-on.png';
                        circle.style.left = 'calc(100% - 74px)';
                    }
                }, 150);
            } else {
                circle.style.transition = 'opacity 0.15s ease, left 0.3s ease';
                circle.style.opacity = '1';

                setTimeout(() => {
                    if (buttonType === 'type-2') {
                        circle.src = '/images/toggler-off.png';
                        circle.style.left = '6px';
                    } else if (buttonType === 'type-3') {
                        circle.src = '/images/toggler-off.png';
                        circle.style.left = '2px';
                    } else {
                        circle.src = '/images/toggler-off.png';
                        circle.style.left = '-8px';
                    }
                }, 150);
            }
        });
    });
});
