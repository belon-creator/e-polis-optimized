const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;
const size = slide[0].offsetWidth; // Використовуємо offsetWidth для розрахунку розміру

slides.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", () => {
  if (counter >= slide.length - 1) return;
  counter++;
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(${-size * counter}px)`;
});
