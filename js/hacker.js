document.addEventListener('contextmenu', event => {
  event.preventDefault();
});

document.addEventListener('keydown', event => {
  if (
    event.ctrlKey &&
    event.shiftKey &&
    (event.key === 'C' ||
      event.key === 'c' ||
      event.key === 'J' ||
      event.key === 'j' ||
      event.key === 'о' ||
      event.key === 'О' ||
      event.key === 'с' ||
      event.key === 'С')
  ) {
    event.preventDefault();
    showHackerModal();
  }

  if (
    (event.ctrlKey && (event.key === 'u' || event.key === 'U')) ||
    event.key === 'F12' ||
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === 'I' || event.key === 'i')) ||
    (event.ctrlKey && (event.key === 'г' || event.key === 'Г')) ||
    (event.ctrlKey &&
      event.shiftKey &&
      (event.key === 'ш' || event.key === 'Ш'))
  ) {
    event.preventDefault();
    showHackerModal();
  }
});

function showHackerModal() {
  let modal = document.querySelector('.hacker-modal');

  if (!modal) {
    // Якщо модальне вікно не існує, створюємо його
    modal = document.createElement('div');
    modal.classList.add('hacker-modal');
    modal.innerHTML = `
      <div class="image-container">
        <img class="hacker-img" src="/img/rock.jpg" alt="rock">
        <p class="hacker-txt">ХАЦКЄР?</p>
      </div>
    `;
    document.body.appendChild(modal);

    // Додаємо стилі для модального вікна
    const style = document.createElement('style');
    style.textContent = `
      .hacker-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.8);
        padding: 20px;
        border-radius: 10px;
        z-index: 1000;
      }
      .image-container {
        position: relative;
        display: inline-block;
      }
      .hacker-img {
        display: block;
        width: 500px
      }
      .hacker-txt {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        font-size: 50px;
  font-weight: bolder;
      }
    `;
    document.head.appendChild(style);

    // Додаємо обробник події click для закриття модального вікна
    modal.addEventListener('click', function (event) {
      if (event.target !== modal) {
        modal.style.display = 'none';
      }
    });
  } else {
    // Якщо модальне вікно існує, робимо його видимим.
    modal.style.display = 'block';
  }
}
