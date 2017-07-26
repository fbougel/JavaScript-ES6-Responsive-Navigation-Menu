const offCanvas  = document.querySelector('.c-off-canvas'),
      menuToggle = document.querySelector('.c-menu__toggle'),
      main       = document.querySelector('.o-main');

const closeMenu = [menuToggle, main];

menuToggle.addEventListener('click', e => {
  e.preventDefault();
  e.stopImmediatePropagation();
  offCanvas.classList.toggle('is-open');
  main.classList.toggle('is-open');
});

for (let i = 0; i < closeMenu.length; i++) {
  closeMenu[i].addEventListener('click', e => {
    e.preventDefault();
    if (main.classList.contains('is-open') && !(e.target).classList.contains('menu-toggle')) {
      main.classList.remove('is-open');
      offCanvas.classList.remove('is-open');
    }
  });
}