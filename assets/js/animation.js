const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    body.classList.add('scrolling');
  } else {
    body.classList.remove('scrolling');
  }
});
