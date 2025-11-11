// const scriptURL =
//   'https://script.google.com/macros/s/AKfycbwkSjuCpLVK4f_7bPjC55UHoI8o5KqeBn4PxluQZyf8WmgTZj-DFFveHWJ1VStwXFY/exec'; // URL вашого Apps Script

// document.addEventListener('DOMContentLoaded', () => {
//   const bannerButtons = document.querySelectorAll('.banner-btn');
//   const overlay = document.querySelector('.overlay');
//   const formContainer = document.querySelector('.form-container');
//   const closeFormButton = document.querySelector('.close-form');
//   const selectedProduct = document.getElementById('selected-product');
//   const form = document.getElementById('insurance-form');
//   const nameInput = document.getElementById('name');
//   const phoneInput = document.getElementById('phone');
//   const commentInput = document.getElementById('comment');
//   const submitButton = document.querySelector('.submit-btn');

//   bannerButtons.forEach(button => {
//     button.addEventListener('click', function (event) {
//       event.preventDefault();
//       const productName = this.querySelector('.banner-btn-txt').innerText;
//       selectedProduct.innerText = `Оформлення: ${productName}`;
//       overlay.style.display = 'block';
//       formContainer.style.display = 'block';
//     });
//   });

//   function closeForm() {
//     overlay.style.display = 'none';
//     formContainer.style.display = 'none';
//     form.reset();
//     submitButton.disabled = true;
//   }

//   overlay.addEventListener('click', closeForm);
//   closeFormButton.addEventListener('click', closeForm);

//   function toggleSubmitButton() {
//     submitButton.disabled = !(
//       nameInput.value.trim() && phoneInput.value.trim()
//     );
//   }

//   nameInput.addEventListener('input', toggleSubmitButton);
//   phoneInput.addEventListener('input', toggleSubmitButton);

//   phoneInput.addEventListener('input', function () {
//     if (!this.value.startsWith('+380')) {
//       this.value = '+380' + this.value.slice(4);
//     }
//   });

//   function validatePhoneNumber(phone) {
//     return /^\+380\d{9}$/.test(phone);
//   }

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const user_name = nameInput.value;
//     const user_phone = phoneInput.value;
//     const user_comment = commentInput.value;
//     const selected_product = selectedProduct.innerText.replace(
//       'Оформлення: ',
//       '',
//     );

//     if (!validatePhoneNumber(user_phone)) {
//       alert('Введіть номер у форматі +380XXXXXXXXX');
//       return;
//     }

//     fetch(scriptURL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         user_name,
//         user_phone,
//         user_comment,
//         selected_product,
//       }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (data.result === 'success') {
//           alert('Ваш запит відправлено!');
//           closeForm();
//         } else {
//           alert('Помилка при відправці, напишіть нам на будь який зручний месенджер ' + data.message);
//         }
//       })
//       .catch(error => {
//         console.error('Помилка:', error);
//         alert('Помилка при відправці, напишіть нам на будь який зручний месенджер.');
//       });
//   });
// });
emailjs.init('UnYD9yT3mhsjyhkPo');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('insurance-form');
    const bannerButtons = document.querySelectorAll('.travel');
    const selectedProduct = document.getElementById('selected-product');
    const overlay = document.querySelector('.overlay');
    const formContainer = document.querySelector('.form-container');
    const closeFormButton = document.querySelector('.close-form');
    const nameInput = document.getElementById('name'); // Виправлено
    const phoneInput = document.getElementById('phone'); // Виправлено
    const commentInput = document.getElementById('comment'); // Виправлено
    const submitButton = document.querySelector('.submit-btn');

    bannerButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const productName = this.querySelector('.banner-btn-txt').innerText;
            selectedProduct.innerText = `Оформлення: ${productName}`;
            overlay.style.display = 'block';
            formContainer.style.display = 'block';
        });
    });

    function closeForm() {
        overlay.style.display = 'none';
        formContainer.style.display = 'none';
        form.reset();
        submitButton.disabled = true;
    }

    overlay.addEventListener('click', closeForm);
    closeFormButton.addEventListener('click', closeForm);

    function toggleSubmitButton() {
        submitButton.disabled = !(
            nameInput.value.trim() && phoneInput.value.trim()
        );
    }

    nameInput.addEventListener('input', toggleSubmitButton);
    phoneInput.addEventListener('input', toggleSubmitButton);

    phoneInput.addEventListener('input', function () {
        if (!this.value.startsWith('+380')) {
            this.value = '+380' + this.value.slice(4);
        }
    });

    function validatePhoneNumber(phone) {
        return /^\+380\d{9}$/.test(phone);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const user_name = nameInput.value; // Виправлено
        const user_phone = phoneInput.value; // Виправлено
        const user_comment = commentInput.value; // Виправлено
        const selected_product = selectedProduct.innerText.replace(
            'Оформлення: ',
            '',
        );

        if (!validatePhoneNumber(user_phone)) {
            alert('Введіть номер у форматі +380XXXXXXXXX');
            return;
        }

        const templateParams = {
            user_name: user_name,
            user_phone: user_phone,
            user_comment: user_comment,
            selected_product: selected_product,
        };

        emailjs
            .send('service_10lknas', 'template_pjyr1yb', templateParams) // Замініть на ваші Service ID та Template ID з EmailJS
            .then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Ваш запит відправлено!');
                    closeForm();
                },
                function (error) {
                    console.error('FAILED...', error);
                    alert(
                        'Помилка при відправці, напишіть нам на будь який зручний месенджер.',
                    );
                },
            );
    });
});