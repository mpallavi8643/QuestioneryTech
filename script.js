// Scroll to top on reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  // Toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    const icon = document.getElementById("toggle-icon");
    icon.classList.toggle("ri-moon-clear-line");
    icon.classList.toggle("ri-sun-line");
  }
  
  // Smooth scroll to section
  document.querySelectorAll('a[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetClass = this.getAttribute('data-target');
      const targetElement = document.querySelector(`.${targetClass}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  