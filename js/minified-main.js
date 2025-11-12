const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(e => {
  const t = e.querySelector('.accordion-header'),
    n = e.querySelector('.accordion-content'),
    o = e.querySelector('.accordion-icon');
  t.addEventListener('click', () => {
    accordionItems.forEach(e => {
      const t = e.querySelector('.accordion-content'),
        o = e.querySelector('.accordion-icon');
      t !== n && ((t.style.display = 'none'), (o.textContent = '+'));
    }),
      'block' === n.style.display
        ? ((n.style.display = 'none'), (o.textContent = '+'))
        : ((n.style.display = 'block'), (o.textContent = '-'));
  });
});
const menuToggle = document.querySelector('.menu-toggle'),
  menuToggleOperator = document.querySelector('.menu-toggle-operator'),
  menu = document.querySelector('.menu');
function toggleMenu(e) {
  menu.classList.toggle('open'),
    menuToggle.classList.toggle('open'),
    menuToggleOperator && menuToggleOperator.classList.toggle('open'),
    e.stopPropagation();
}
menuToggle.addEventListener('click', toggleMenu),
  menuToggleOperator &&
    menuToggleOperator.addEventListener('click', toggleMenu),
  document.addEventListener('click', e => {
    menu.contains(e.target) ||
      menuToggle.contains(e.target) ||
      (menuToggleOperator && menuToggleOperator.contains(e.target)) ||
      (menu.classList.remove('open'),
      menuToggle.classList.remove('open'),
      menuToggleOperator && menuToggleOperator.classList.remove('open'));
  });
const buttons = document.querySelectorAll('.to-top-btn');
function showHackerModal() {
  let e = document.querySelector('.hacker-modal');
  if (e) e.style.display = 'block';
  else {
    (e = document.createElement('div')),
      e.classList.add('hacker-modal'),
      (e.innerHTML =
        '\n      <div class="image-container">\n        <img class="hacker-img" src="/img/rock.jpg" alt="rock">\n        <p class="hacker-txt">ХАЦКЄР?</p>\n      </div>\n    '),
      document.body.appendChild(e);
    const t = document.createElement('style');
    (t.textContent =
      '\n      .hacker-modal {\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        background-color: rgba(0, 0, 0, 0.8);\n        padding: 20px;\n        border-radius: 10px;\n        z-index: 1000;\n      }\n      .image-container {\n        position: relative;\n        display: inline-block;\n      }\n      .hacker-img {\n        display: block;\n        width: 500px\n      }\n      .hacker-txt {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        color: white;\n        text-align: center;\n        font-size: 50px;\n  font-weight: bolder;\n      }\n    '),
      document.head.appendChild(t),
      e.addEventListener('click', function (t) {
        t.target !== e && (e.style.display = 'none');
      });
  }
}
buttons.forEach(e => {
  e.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}),
  document.addEventListener('contextmenu', e => {
    e.preventDefault();
  }),
  document.addEventListener('keydown', e => {
    e.ctrlKey &&
      e.shiftKey &&
      ('C' === e.key ||
        'c' === e.key ||
        'J' === e.key ||
        'j' === e.key ||
        'о' === e.key ||
        'О' === e.key ||
        'с' === e.key ||
        'С' === e.key) &&
      (e.preventDefault(), showHackerModal()),
      ((e.ctrlKey && ('u' === e.key || 'U' === e.key)) ||
        'F12' === e.key ||
        (e.ctrlKey && e.shiftKey && ('I' === e.key || 'i' === e.key)) ||
        (e.ctrlKey && ('г' === e.key || 'Г' === e.key)) ||
        (e.ctrlKey && e.shiftKey && ('ш' === e.key || 'Ш' === e.key))) &&
        (e.preventDefault(), showHackerModal());
  }),
  document.addEventListener('DOMContentLoaded', () => {
    const e = document.querySelectorAll(
        '.fade-in-left, .fade-in-right, .animated-element',
      ),
      t = new IntersectionObserver(
        e => {
          e.forEach(e => {
            e.isIntersecting && e.target.classList.add('visible');
          });
        },
        { threshold: 0.1 },
      );
    e.forEach(e => t.observe(e));
  });
