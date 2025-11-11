(function () {
    let inactivityTime = 30 * 60 * 1000; 
    let timeout;
  
    // Функція очищення всіх кукі
    function clearCookies() {
      document.cookie.split(";").forEach((cookie) => {
        document.cookie = cookie.replace(
          /^ +/,
          ""
        ).replace(
          /=.*/,
          `=;expires=${new Date(0).toUTCString()};path=/`
        );
      });
    }
  
    // Очищення кукі при закритті або перезавантаженні сторінки
    window.addEventListener("beforeunload", clearCookies);
  
    // Функція скидання таймера активності
    function resetTimer() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        clearCookies();
        console.log("Кукі очищені через неактивність");
      }, inactivityTime);
    }
  
    // Слухаємо події активності
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);
    document.addEventListener("click", resetTimer);
    document.addEventListener("scroll", resetTimer);
    document.addEventListener("touchstart", resetTimer);
  
    // Запускаємо таймер при завантаженні сторінки
    resetTimer();
  })();
  