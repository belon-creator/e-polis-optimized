// js/kasko.js

document.addEventListener('DOMContentLoaded', () => {
    
    // Перевірте, чи коректні ці ключі та ідентифікатори
    const EMAILJS_SERVICE_ID = 'service_k4tag2s'; 
    const EMAILJS_TEMPLATE_ID = 'template_anu6odh'; 

    const kaskoForms = document.querySelectorAll('.kasko-form');
    const thankYouPageURL = 'https://e-polis.net.ua/pages/dyakyemo-za-zamovlennya.html';

    kaskoForms.forEach(form => {
        const phoneInput = form.querySelector('input[name="client_phone"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', function () {
                if (!this.value.startsWith('+380')) {
                    this.value = '+380';
                }
            });
        }

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formMessage = this.querySelector('.form-message');
            formMessage.textContent = '';
            formMessage.classList.remove('success', 'error');

            const clientName = this.querySelector('input[name="client_name"]').value.trim();
            const clientPhone = this.querySelector('input[name="client_phone"]').value.trim();
            const kaskoType = this.querySelector('input[name="kasko_type"]').value;
            const clientComment = this.querySelector('textarea[name="client_comment"]').value.trim();

            if (!clientName || !clientPhone) {
                formMessage.textContent = 'Будь ласка, заповніть всі обов\'язкові поля.';
                formMessage.classList.add('error');
                return;
            }

            const phonePattern = /^\+380\d{9}$/;
            if (!phonePattern.test(clientPhone)) {
                formMessage.textContent = 'Введіть номер у форматі +380XXXXXXXXX';
                formMessage.classList.add('error');
                return;
            }

            // *** ЗМІНА ТУТ ***
            // Додаємо "E-polis" до назви продукту
            const fullKaskoName = `E-polis: ${kaskoType}`;

            const templateParams = {
                product_name: fullKaskoName, // Використовуємо нову змінну
                user_name: clientName,
                user_phone: clientPhone,
                user_comments: clientComment || 'Коментар відсутній',
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(
                    () => {
                        console.log('✅ Заявка успішно відправлена!');
                        this.reset();
                        formMessage.textContent = `Дякуємо, ${clientName}! Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.`;
                        formMessage.classList.add('success');
                        
                        setTimeout(() => {
                            window.location.href = thankYouPageURL;
                        }, 2000);
                    },
                    (error) => {
                        console.error('❌ Помилка при відправці заявки:', error);
                        formMessage.textContent = 'Виникла помилка. Спробуйте пізніше.';
                        formMessage.classList.add('error');
                    }
                );
        });
    });
});