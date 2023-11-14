const contrastBtn = document.getElementById('contrast-btn');
let isHighContrast = false;

contrastBtn.addEventListener('click', () => {
  const mainColor = isHighContrast ? '#5EB319' : '#417D10';

  document.documentElement.style.setProperty('--main-color', mainColor);
  isHighContrast = !isHighContrast;
});


const modal = document.getElementById('modal');
const closeButton = document.getElementById('closeButton');

function closeModal() {
  modal.style.display = 'none';
}

modal.addEventListener('click', () => {
  closeModal();
});

modal.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

closeButton.addEventListener('click', () => {
  closeModal();
});

closeButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
}