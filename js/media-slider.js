// js/media-slider.js
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.epolis-media-slider', {
        // Опції Swiper
        loop: true, // Дозволяє нескінченне гортання
        centeredSlides: true, // Центрує активний слайд
        speed: 20000, // Повільна швидкість скролу для плавності
        autoplay: {
            delay: 200, // Автоматичне гортання кожні 5 секунд
            disableOnInteraction: false, // Не зупиняти після взаємодії користувача
        },
        
        // Навігаційні кнопки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Налаштування для адаптивності
        breakpoints: {
            // Мобільна версія (екран від 0 до 768px)
            0: {
                slidesPerView: 1.5, // По 1.5 картки в ряд (частково видимі)
                spaceBetween: 15,
            },
            // Десктопна версія (екран від 768px і більше)
            768: {
                slidesPerView: 3, // Три картки в ряд, а бокові - частково видимі
                spaceBetween: 20,
            },
        },
    });
});