// const menuToggle = document.querySelector(".menu-toggle");
// const menu = document.querySelector(".menu");

// // Відкриття/закриття меню при кліку на кнопку
// menuToggle.addEventListener("click", (event) => {
//   menu.classList.toggle("open");
//   menuToggle.classList.toggle("open");
//   event.stopPropagation(); // Зупиняє подію, щоб клік по кнопці не спрацював на документі
// });

// // Закриття меню при кліку поза ним
// document.addEventListener("click", (event) => {
//   if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
//     menu.classList.remove("open");
//     menuToggle.classList.remove("open");
//   }
// });

const menuToggle = document.querySelector(".menu-toggle");
const menuToggleOperator = document.querySelector(".menu-toggle-operator");
const menu = document.querySelector(".menu");

// Функція для перемикання меню
function toggleMenu(event) {
  menu.classList.toggle("open");
  menuToggle.classList.toggle("open");
  if (menuToggleOperator) {
    menuToggleOperator.classList.toggle("open");
  }
  event.stopPropagation(); // Щоб не закривалося одразу
}

// Обробник для головної кнопки
menuToggle.addEventListener("click", toggleMenu);

// Обробник для додаткової кнопки (оператора)
if (menuToggleOperator) {
  menuToggleOperator.addEventListener("click", toggleMenu);
}

// Закриття при кліку поза меню
document.addEventListener("click", (event) => {
  if (
    !menu.contains(event.target) &&
    !menuToggle.contains(event.target) &&
    !(menuToggleOperator && menuToggleOperator.contains(event.target))
  ) {
    menu.classList.remove("open");
    menuToggle.classList.remove("open");
    if (menuToggleOperator) {
      menuToggleOperator.classList.remove("open");
    }
  }
});
