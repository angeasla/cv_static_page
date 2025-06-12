function scrollToSection(element) {
    var target = document.querySelector(element.getAttribute('data-scroll'));
    if (target) {
      event.preventDefault();
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  }