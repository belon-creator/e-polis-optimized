// js/reviews-emailjs.js

document.addEventListener('DOMContentLoaded', () => {
  // === ВСТАВТЕ СВОЇ КЛЮЧІ EMAILJS ===
  const EMAILJS_SERVICE_ID = 'service_10lknas';
  const EMAILJS_TEMPLATE_ID = 'template_pjyr1yb';

  const reviewsContainer = document.getElementById('epolis-reviews-container');
  const averageRatingContainer = document.getElementById(
    'epolis-average-rating-container',
  );
  const reviewForm = document.getElementById('epolis-review-form');
  const ratingStarsContainer = document.getElementById(
    'epolis-rating-stars-container',
  );
  const ratingInput = document.getElementById('epolis-review-rating-input');
  const formMessage = document.getElementById('epolis-form-message');
  const loadMoreBtn = document.getElementById('epolis-load-more-btn');

  let reviewsData = [
     {
      name: 'Костянтин',
      rating: 5,
      comment:
        'Все чудово Зв`язалися швидко і відповіли на запитання Дякую'
    },
    {
      name: 'Денис',
      rating: 5,
      comment:
        'Здивувала простота — навіть не очікував, що оформлення поліса може бути таким легким.',
    },
    {
      name: 'Галина',
      rating: 5,
      comment:
        'Дякую за сервіс! Підтримка швидко допомогла розібратися з даними авто. Все чудово.',
    },
    {
      name: 'Олександр',
      rating: 5,
      comment:
        'Вперше вирішив оформити страховку самостійно, до цього ходив в офіс компанії, все зручно і швидко + економія часу',
    },
    {
      name: 'Катерина',
      rating: 5,
      comment:
        'Оформила автоцивілку вперше онлайн — все інтуїтивно і без жодних дзвінків. Рекомендую!',
    },
    {
      name: 'Руслан',
      rating: 5,
      comment:
        'Порівняв кілька сайтів — тут найкраща ціна, плюс поліс прийшов миттєво після оплати.',
    },
    {
      name: 'Наталія',
      rating: 5,
      comment:
        'Дуже приємний досвід, сервіс працює навіть у вихідні. Оформила в неділю за кілька хвилин.',
    },
    {
      name: 'Віктор',
      rating: 5,
      comment:
        'Швидке оформлення, без жодних прихованих комісій. Все прозоро і чесно.',
    },

    {
      name: 'Олексій',
      rating: 5,
      comment:
        'Купував автоцивілку та зелену карту. Зручно, що все в одному місці і без зайвих кроків.',
    },
    {
      name: 'Юлія',
      rating: 5,
      comment:
        'Все чітко: заповнила форму, сплатила, отримала поліс на пошту. Без нервів і очікувань.',
    },

    {
      name: 'Микола',
      rating: 5,
      comment:
        'Оформив страховку прямо з телефону дорогою на роботу. Зручно і швидко.',
    },
    {
      name: 'Тетяна',
      rating: 5,
      comment:
        'Дуже ввічлива підтримка і справжні вигідні ціни, а не “знижки за промокодами”.',
    },

    {
      name: 'Влад',
      rating: 5,
      comment: 'Гарне відношення до клієнтів, швидко',
    },
    {
      name: 'Сергій ',
      rating: 5,
      comment:
        'Приємне відношення до клієнтів, адекватні ціни,швидкість. Порекомендую.',
    },
    {
      name: 'Сергій ',
      rating: 5,
      comment:
        'Інтерфейс простий, зрозумілий. Заповнив і одразу отримав поліс на пошту',
    },
    {
      name: 'Марина',
      rating: 5,
      comment:
        'Підтримка відповіла в 00:20 суботи за хвилину, допомогли розібратися з полісом. Це дійсно круто, підтримка попереднього сервісу яким я користувалась не відповідала навіть вдень на вихідних!',
    },
    {
      name: 'Андрій',
      rating: 5,
      comment: 'Краща ціна, яку знайшов онлайн. І все без жодних промокодів!',
    },
    {
      name: 'Михайло ',
      rating: 5,
      comment: 'Приємно мати справу з сервісом, де все чесно і прозоро',
    },
    {
      name: 'Олена ',
      rating: 5,
      comment:
        'Дуже зручно, оформила автоцивілку за 5 хвилин, ціна приємно здивувала.',
    },
    {
      name: 'Ігор ',
      rating: 5,
      comment:
        'Нарешті сервіс без зайвих промокодів і хитрощів, все прозоро та швидко.',
    },
    {
      name: 'Лілія',
      rating: 5,
      comment: 'Зручний сайт і помірна ціна',
    },
    {
      name: 'Анна',
      rating: 5,
      comment: 'Оформила зелену карту, все добре, дякую',
    },
    {
      name: 'Ольга',
      rating: 5,
      comment:
        'Підтримка на вищому рівні, детально все пояснили, дякую спеціалісту Ірині',
    },
    {
      name: 'Володимир',
      rating: 5,
      comment:
        'Раніше користувався іншим сайтом, але було не зручно постійно шукати промокоди. Тут ціна ще нижча без них',
    },
    {
      name: 'Ігор',
      rating: 5,
      comment:
        'Хотів застрахувати авто від ракет, з попереднього досвіду оформлення каско - треба було їхати в офіс, чекати поки оформлять... Тут же все онлайн, за 20 хвилин прислали поліс для ознайомлення, зфотографував авто через бот і нікуди не їздив. Всім рекомендую!',
    },
    { name: 'Олександр', rating: 5, comment: 'Все дуже зручно, дякую' },
    {
      name: 'Ірина',
      rating: 5,
      comment: 'Швидко оформила поліс, все дуже зручно.',
    },

    {
      name: 'Андрій',
      rating: 5,
      comment:
        'Чудовий сайт, все швидко і без проблем. Оформляв поліс вже двічі.',
    },
    {
      name: 'Дмитро',
      rating: 5,
      comment:
        'Насторожувала низька ціна, але таки оформив, в Дії поліс є, значить все ок',
    },
    {
      name: 'Сергій',
      rating: 4,
      comment:
        'Все сподобалось, зручний сайт, але хотілось би додаткове покриття від усіх компаній',
    },
    { name: 'Марія', rating: 5, comment: 'Просто і зрозуміло. Приємні ціни.' },
    { name: 'Сергій', rating: 5, comment: 'Відмінний сервіс. Усе зрозуміло.' },
  ];

  // Нові змінні для керування відображенням відгуків
  let reviewsToShow = 3;
  const reviewsIncrement = 3;

  // Функція для створення HTML-розмітки зірок
  function createStars(rating) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="${i <= rating ? 'selected' : ''}">★</span>`;
    }
    return starsHtml;
  }

  // Функція для розрахунку середнього рейтингу
  function calculateAverageRating() {
    if (reviewsData.length === 0) return 0;
    const totalRating = reviewsData.reduce(
      (sum, review) => sum + review.rating,
      0,
    );
    return (totalRating / reviewsData.length).toFixed(1);
  }

  // Функція для відображення середнього рейтингу
  function renderAverageRating() {
    if (!averageRatingContainer) return;

    const averageRating = calculateAverageRating();
    const totalReviews = reviewsData.length;

    if (totalReviews > 0) {
      averageRatingContainer.innerHTML = `
                <div class="epolis-average-rating">
                    <div class="epolis-stars-visual">${createStars(
                      Math.round(averageRating),
                    )}</div>
                    <span class="epolis-average-score">${averageRating}</span> / 5
                    <span class="epolis-review-count">(${totalReviews} відгуків)</span>
                </div>
            `;
      generateSchemaMarkup(averageRating, totalReviews);
    } else {
      averageRatingContainer.innerHTML = '';
    }
  }

  // Функція для генерації розмітки Schema.org
  function generateSchemaMarkup(averageRating, reviewCount) {
    const oldScript = document.getElementById('schema-review-markup');
    if (oldScript) {
      oldScript.remove();
    }

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'E-polis',
      url: window.location.href,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: averageRating,
        reviewCount: reviewCount,
      },
    };

    const script = document.createElement('script');
    script.id = 'schema-review-markup';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // Функція для відображення відгуків на сторінці
  function renderReviews() {
    reviewsContainer.innerHTML = '';
    const reviewsToShowSlice = reviewsData.slice(0, reviewsToShow);
    reviewsToShowSlice.forEach(review => {
      const reviewItem = document.createElement('div');
      reviewItem.classList.add('epolis-review-item');
      reviewItem.innerHTML = `
                <div class="epolis-review-header">
                    <span class="epolis-reviewer-name">${review.name}</span>
                    <div class="epolis-stars-visual">${createStars(
                      review.rating,
                    )}</div>
                </div>
                <p class="epolis-review-text">"${review.comment}"</p>
            `;
      reviewsContainer.appendChild(reviewItem);
    });
    renderAverageRating();

    // Показати/приховати кнопку "Показати більше"
    if (loadMoreBtn) {
      if (reviewsToShow >= reviewsData.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'block';
      }
    }
  }

  // --- ОСНОВНИЙ БЛОК: Обробники подій ---
  renderReviews();

  if (reviewForm) {
    reviewForm.addEventListener('submit', event => {
      event.preventDefault();

      const nameValue = document
        .getElementById('epolis-reviewer-name')
        .value.trim();
      const ratingValue = ratingInput.value;
      const commentValue = document
        .getElementById('epolis-review-comment')
        .value.trim();

      if (!nameValue || !ratingValue || !commentValue) {
        if (formMessage) {
          formMessage.textContent = 'Будь ласка, заповніть всі поля.';
          formMessage.classList.remove('success');
        }
        return;
      }

      emailjs
        .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, reviewForm)
        .then(
          () => {
            console.log('✅ Відгук успішно відправлено на пошту!');
            reviewForm.reset();
            ratingInput.value = '';
            document
              .querySelectorAll('#epolis-rating-stars-container span')
              .forEach(s => s.classList.remove('selected'));

            if (formMessage) {
              formMessage.textContent =
                "Дякуємо! Ваш відгук був відправлений. Він з'явиться після модерації";
              formMessage.classList.add('success');
            }
          },
          error => {
            console.error('❌ Помилка при відправці відгуку:', error);
            if (formMessage) {
              formMessage.textContent =
                'Помилка при відправці відгуку. Спробуйте пізніше.';
              formMessage.classList.remove('success');
            }
          },
        );
    });
  }

  if (ratingStarsContainer) {
    const allStars = ratingStarsContainer.querySelectorAll('span');

    allStars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = star.dataset.value;
        ratingInput.value = rating;

        allStars.forEach(s => s.classList.remove('selected'));
        for (let i = 0; i < rating; i++) {
          allStars[i].classList.add('selected');
        }
      });

      star.addEventListener('mouseover', () => {
        const rating = star.dataset.value;
        allStars.forEach(s =>
          s.classList.toggle(
            'hovered',
            parseInt(s.dataset.value) <= parseInt(rating),
          ),
        );
      });

      star.addEventListener('mouseout', () => {
        allStars.forEach(s => s.classList.remove('hovered'));
      });
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      reviewsToShow += reviewsIncrement;
      renderReviews();
    });
  }
});
