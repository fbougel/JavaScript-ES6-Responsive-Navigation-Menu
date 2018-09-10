const offCanvas  = document.querySelector('.c-off-canvas'),
      menuToggle = document.querySelector('.c-menu__toggle'),
      main       = document.querySelector('.o-main');

const closingElements = [menuToggle, main];
const toggleElements  = [offCanvas, main];

menuToggle.addEventListener('click', e => {
  e.preventDefault();
  e.stopImmediatePropagation();
  openElements(...toggleElements);
});

closingElements.forEach(closingElem => {
  closingElem.addEventListener('click', e => {
    e.preventDefault();
    if (main.classList.contains('is-open') && !(e.target).classList.contains('menu-toggle')) {
      closeElements(...toggleElements);
    }
  })
});

function openElements(...elements) {
  const elementsToOpen = [...elements];
  elementsToOpen.forEach(elementToOpen => elementToOpen.classList.toggle('is-open'));
}

function closeElements(...elements) {
  const elementsToClose = [...elements];
  elementsToClose.forEach(elementToClose => elementToClose.classList.remove('is-open'));
}
