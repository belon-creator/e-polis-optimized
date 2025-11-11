const buttons = document.querySelectorAll('.to-top-btn');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});