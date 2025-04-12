function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
  const bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  span.textContent = bodyColor;
});
