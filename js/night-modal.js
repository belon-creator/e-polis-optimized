document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('nightModal');
  const closeBtn = document.querySelector('.night-modal-close');
  const okBtn = document.querySelector('.night-modal-ok');

  function getUkraineTime() {
    const now = new Date();
    const options = {
      timeZone: 'Europe/Kyiv',
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const parts = new Intl.DateTimeFormat([], options).formatToParts(now);

    return {
      hour: Number(parts.find(p => p.type === 'hour').value),
      minute: Number(parts.find(p => p.type === 'minute').value),
      second: Number(parts.find(p => p.type === 'second').value),
    };
  }

  function checkNightTime() {
    const uaTime = getUkraineTime();

    // Показуємо тільки між 23:00 і 23:59
    if (uaTime.hour === 23) {
      modal.style.display = 'flex';
    }
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeModal);
  okBtn.addEventListener('click', closeModal);

  window.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  checkNightTime();
});
