// Отримуємо всі елементи акордеону
const accordionItems = document.querySelectorAll(".accordion-item");

// Додаємо обробник подій до кожного заголовка акордеону
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector(".accordion-icon");

  header.addEventListener("click", () => {
    // Закриваємо всі вмістові блоки і змінюємо іконку
    accordionItems.forEach((i) => {
      const itemContent = i.querySelector(".accordion-content");
      const itemIcon = i.querySelector(".accordion-icon");
      if (itemContent !== content) {
        itemContent.style.display = "none";
        itemIcon.textContent = "+";
      }
    });

    // Перевіряємо стан видимості вмісту і змінюємо його стан
    if (content.style.display === "block") {
      content.style.display = "none";
      icon.textContent = "+";
    } else {
      content.style.display = "block";
      icon.textContent = "-";
    }
  });
});
