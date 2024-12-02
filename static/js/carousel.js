document.addEventListener('DOMContentLoaded', function () {
    // Найти все Splide элементы
    var splides = document.querySelectorAll('.splide');

    // Перебираем все Splide элементы
    splides.forEach(function (splideElement, index) {
        // Настраиваем параметры для каждого Splide
        var options = {
            type: 'loop',
            perPage: 3,
            gap: '50px',
            pauseOnHover: true,
            arrows: true,
            pagination: false,
            live: false
        };

        // Если это второй Splide, включаем Drag Free Snap
        if (index === 1) {
            options.drag = 'free'; // Включаем свободный перетаскивание
            options.snap = true;   // Включаем привязку к слайдам
        }
        if (index === 2) {
            options.arrows = false;
            options.pagination = false;
            options.drag = false;
            options.autoScroll = {
                pauseOnHover: false,    // Don't pause when hovered
                pauseOnFocus: false,    // Don't pause when focused
            }

        }
        else {
            // Для всех остальных Splide подключаем Autoscroll
            options.autoScroll = {
                speed: 1,
                pauseOnHover: true,
                pauseOnFocus: false,
            };
        }

        // Создаём экземпляр Splide
        var splide = new Splide(splideElement, options);

        // Монтируем с подключением плагина Autoscroll, если это не второй Splide
        if (index !== 1) {
            splide.mount(window.splide.Extensions);
        } else {
            // Для второго Splide просто монтируем базовый Splide
            splide.mount();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#marquee', {
        type       : 'loop',       // Infinite loop
        perPage    : 1,            // Ensure one item at a time
        perMove    : 1,            // Smooth scrolling
        arrows     : false,        // No arrows
        pagination : false,        // No pagination
        drag       : false,        // Disable dragging
        autoScroll : {
            speed: 2,               // Scrolling speed (higher is faster)
            pauseOnHover: false,    // Don't pause when hovered
            pauseOnFocus: false,    // Don't pause when focused
        },
    }).mount({ Autoscroll });
});
